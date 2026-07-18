param(
    [string]$Source = 'C:\Users\Administrator\Desktop\item',
    [string]$Output = 'C:\Users\Administrator\Desktop\item_processed',
    [string]$ProjectOutput = '',
    [int]$CanvasSize = 64,
    [int]$Inset = 4,
    [switch]$Force
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $Source -PathType Container)) {
    throw "Item source folder does not exist: $Source"
}

$sourceFiles = @(Get-ChildItem -LiteralPath $Source -File -Filter '*.png' | Sort-Object Name)
if ($sourceFiles.Count -eq 0) {
    throw "No PNG files found in: $Source"
}

if (Test-Path -LiteralPath $Output) {
    if (-not $Force) {
        throw "Output folder already exists: $Output. Use -Force to replace generated PNG files."
    }
} else {
    New-Item -ItemType Directory -Path $Output | Out-Null
}

if ($ProjectOutput) {
    New-Item -ItemType Directory -Force -Path $ProjectOutput | Out-Null
}

Add-Type -AssemblyName System.Drawing

$typeDefinition = @'
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class ItemIconProcessor
{
    private sealed class PixelComponent
    {
        public readonly List<int> Pixels = new List<int>();
        public long LuminanceTotal;
    }

    public static void Process(string sourcePath, string outputPath, int canvasSize, int inset)
    {
        using (Bitmap source = Load32(sourcePath))
        using (Bitmap extracted = ExtractSubject(source))
        using (Bitmap fitted = FitToCanvas(extracted, canvasSize, inset))
        {
            fitted.Save(outputPath, ImageFormat.Png);
        }
    }

    private static Bitmap Load32(string path)
    {
        using (var source = new Bitmap(path))
        {
            var result = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb);
            result.SetResolution(96, 96);
            using (Graphics graphics = Graphics.FromImage(result))
            {
                graphics.Clear(Color.Transparent);
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.DrawImageUnscaled(source, 0, 0);
            }
            return result;
        }
    }

    private static Bitmap ExtractSubject(Bitmap source)
    {
        int width = source.Width;
        int height = source.Height;
        int[] pixels = ReadPixels(source);
        bool[] background = new bool[pixels.Length];
        int[] queue = new int[pixels.Length];
        int head = 0;
        int tail = 0;

        Action<int> seed = index =>
        {
            if (!background[index] && IsFloodableBackground(pixels[index]))
            {
                background[index] = true;
                queue[tail++] = index;
            }
        };

        for (int x = 0; x < width; x++)
        {
            seed(x);
            seed((height - 1) * width + x);
        }
        for (int y = 0; y < height; y++)
        {
            seed(y * width);
            seed(y * width + width - 1);
        }

        int[] dx = { -1, 0, 1, -1, 1, -1, 0, 1 };
        int[] dy = { -1, -1, -1, 0, 0, 1, 1, 1 };
        while (head < tail)
        {
            int index = queue[head++];
            int x = index % width;
            int y = index / width;
            for (int n = 0; n < 8; n++)
            {
                int nx = x + dx[n];
                int ny = y + dy[n];
                if (nx < 0 || ny < 0 || nx >= width || ny >= height)
                    continue;

                int next = ny * width + nx;
                if (!background[next] && IsFloodableBackground(pixels[next]))
                {
                    background[next] = true;
                    queue[tail++] = next;
                }
            }
        }

        RemoveLargeWhiteHoles(pixels, background, width, height);

        int minX = width;
        int minY = height;
        int maxX = -1;
        int maxY = -1;

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int index = y * width + x;
                if (background[index])
                {
                    pixels[index] = 0;
                    continue;
                }

                pixels[index] |= unchecked((int)0xFF000000);
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }

        if (maxX < minX || maxY < minY)
            throw new InvalidOperationException("No item subject was detected in " + source.Width + "x" + source.Height + " image.");

        int margin = Math.Max(2, Math.Min(width, height) / 256);
        minX = Math.Max(0, minX - margin);
        minY = Math.Max(0, minY - margin);
        maxX = Math.Min(width - 1, maxX + margin);
        maxY = Math.Min(height - 1, maxY + margin);

        int cropWidth = maxX - minX + 1;
        int cropHeight = maxY - minY + 1;
        int[] crop = new int[cropWidth * cropHeight];
        for (int y = 0; y < cropHeight; y++)
            Array.Copy(pixels, (minY + y) * width + minX, crop, y * cropWidth, cropWidth);

        return WritePixels(cropWidth, cropHeight, crop);
    }

    private static void RemoveLargeWhiteHoles(int[] pixels, bool[] background, int width, int height)
    {
        bool[] visited = new bool[pixels.Length];
        int[] queue = new int[pixels.Length];
        int minimumArea = Math.Max(1024, pixels.Length / 3000);
        int[] dx = { -1, 0, 1, -1, 1, -1, 0, 1 };
        int[] dy = { -1, -1, -1, 0, 0, 1, 1, 1 };

        for (int start = 0; start < pixels.Length; start++)
        {
            if (background[start] || visited[start] || !IsWhiteHoleCandidate(pixels[start]))
                continue;

            var component = new PixelComponent();
            int head = 0;
            int tail = 0;
            queue[tail++] = start;
            visited[start] = true;

            while (head < tail)
            {
                int index = queue[head++];
                component.Pixels.Add(index);
                component.LuminanceTotal += GetLuminance(pixels[index]);
                int x = index % width;
                int y = index / width;

                for (int n = 0; n < 8; n++)
                {
                    int nx = x + dx[n];
                    int ny = y + dy[n];
                    if (nx < 0 || ny < 0 || nx >= width || ny >= height)
                        continue;

                    int next = ny * width + nx;
                    if (!background[next] && !visited[next] && IsWhiteHoleCandidate(pixels[next]))
                    {
                        visited[next] = true;
                        queue[tail++] = next;
                    }
                }
            }

            if (component.Pixels.Count < minimumArea)
                continue;

            double averageLuminance = component.LuminanceTotal / (double)component.Pixels.Count;
            if (averageLuminance < 238.0)
                continue;

            foreach (int index in component.Pixels)
                background[index] = true;
        }
    }

    private static bool IsFloodableBackground(int pixel)
    {
        int r = (pixel >> 16) & 255;
        int g = (pixel >> 8) & 255;
        int b = pixel & 255;
        int max = Math.Max(r, Math.Max(g, b));
        int min = Math.Min(r, Math.Min(g, b));
        float saturation = max == 0 ? 0f : (max - min) / (float)max;
        float luminance = 0.2126f * r + 0.7152f * g + 0.0722f * b;
        return saturation < 0.24f && luminance > 135f;
    }

    private static bool IsWhiteHoleCandidate(int pixel)
    {
        int r = (pixel >> 16) & 255;
        int g = (pixel >> 8) & 255;
        int b = pixel & 255;
        int max = Math.Max(r, Math.Max(g, b));
        int min = Math.Min(r, Math.Min(g, b));
        float saturation = max == 0 ? 0f : (max - min) / (float)max;
        return saturation < 0.10f && GetLuminance(pixel) > 224;
    }

    private static int GetLuminance(int pixel)
    {
        int r = (pixel >> 16) & 255;
        int g = (pixel >> 8) & 255;
        int b = pixel & 255;
        return (int)Math.Round(0.2126 * r + 0.7152 * g + 0.0722 * b);
    }

    private static Bitmap FitToCanvas(Bitmap source, int canvasSize, int inset)
    {
        var result = new Bitmap(canvasSize, canvasSize, PixelFormat.Format32bppArgb);
        result.SetResolution(96, 96);
        int available = canvasSize - inset * 2;
        float scale = Math.Min(available / (float)source.Width, available / (float)source.Height);
        int width = Math.Max(1, (int)Math.Round(source.Width * scale));
        int height = Math.Max(1, (int)Math.Round(source.Height * scale));
        int x = (canvasSize - width) / 2;
        int y = (canvasSize - height) / 2;

        using (Graphics graphics = Graphics.FromImage(result))
        using (var attributes = new ImageAttributes())
        {
            graphics.Clear(Color.Transparent);
            graphics.CompositingMode = CompositingMode.SourceCopy;
            graphics.CompositingQuality = CompositingQuality.HighQuality;
            graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
            graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
            graphics.SmoothingMode = SmoothingMode.HighQuality;
            attributes.SetWrapMode(WrapMode.TileFlipXY);
            graphics.DrawImage(
                source,
                new Rectangle(x, y, width, height),
                0,
                0,
                source.Width,
                source.Height,
                GraphicsUnit.Pixel,
                attributes);
        }

        return result;
    }

    private static int[] ReadPixels(Bitmap bitmap)
    {
        var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
        BitmapData data = bitmap.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        try
        {
            int stride = Math.Abs(data.Stride);
            byte[] raw = new byte[stride * bitmap.Height];
            Marshal.Copy(data.Scan0, raw, 0, raw.Length);
            int[] pixels = new int[bitmap.Width * bitmap.Height];

            for (int y = 0; y < bitmap.Height; y++)
            {
                int row = y * stride;
                for (int x = 0; x < bitmap.Width; x++)
                {
                    int offset = row + x * 4;
                    int b = raw[offset];
                    int g = raw[offset + 1];
                    int r = raw[offset + 2];
                    int a = raw[offset + 3];
                    pixels[y * bitmap.Width + x] = (a << 24) | (r << 16) | (g << 8) | b;
                }
            }

            return pixels;
        }
        finally
        {
            bitmap.UnlockBits(data);
        }
    }

    private static Bitmap WritePixels(int width, int height, int[] pixels)
    {
        var bitmap = new Bitmap(width, height, PixelFormat.Format32bppArgb);
        bitmap.SetResolution(96, 96);
        var rect = new Rectangle(0, 0, width, height);
        BitmapData data = bitmap.LockBits(rect, ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
        try
        {
            int stride = Math.Abs(data.Stride);
            byte[] raw = new byte[stride * height];

            for (int y = 0; y < height; y++)
            {
                int row = y * stride;
                for (int x = 0; x < width; x++)
                {
                    int pixel = pixels[y * width + x];
                    int offset = row + x * 4;
                    raw[offset] = (byte)(pixel & 255);
                    raw[offset + 1] = (byte)((pixel >> 8) & 255);
                    raw[offset + 2] = (byte)((pixel >> 16) & 255);
                    raw[offset + 3] = (byte)((pixel >> 24) & 255);
                }
            }

            Marshal.Copy(raw, 0, data.Scan0, raw.Length);
        }
        finally
        {
            bitmap.UnlockBits(data);
        }
        return bitmap;
    }
}
'@

if (-not ('ItemIconProcessor' -as [type])) {
    Add-Type -TypeDefinition $typeDefinition -ReferencedAssemblies System.Drawing
}

$processed = @()
foreach ($file in $sourceFiles) {
    $destination = Join-Path $Output $file.Name
    [ItemIconProcessor]::Process($file.FullName, $destination, $CanvasSize, $Inset)
    $processed += Get-Item -LiteralPath $destination
}

$previewPath = Join-Path $Output '_preview.png'
$cellSize = 112
$columns = 5
$rows = [Math]::Ceiling($processed.Count / $columns)
$sheet = New-Object System.Drawing.Bitmap ($columns * $cellSize), ($rows * $cellSize), ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($sheet)
$font = New-Object System.Drawing.Font 'Arial', 8
$light = [System.Drawing.Color]::FromArgb(255, 74, 74, 74)
$dark = [System.Drawing.Color]::FromArgb(255, 54, 54, 54)
$textBrush = [System.Drawing.Brushes]::White

try {
    $graphics.Clear($dark)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
    for ($i = 0; $i -lt $processed.Count; $i++) {
        $cellX = ($i % $columns) * $cellSize
        $cellY = [Math]::Floor($i / $columns) * $cellSize
        for ($y = 0; $y -lt 80; $y += 8) {
            for ($x = 0; $x -lt 80; $x += 8) {
                $brush = if ((($x / 8) + ($y / 8)) % 2 -eq 0) {
                    New-Object System.Drawing.SolidBrush $light
                } else {
                    New-Object System.Drawing.SolidBrush $dark
                }
                try {
                    $graphics.FillRectangle($brush, $cellX + 16 + $x, $cellY + 8 + $y, 8, 8)
                } finally {
                    $brush.Dispose()
                }
            }
        }

        $image = [System.Drawing.Image]::FromFile($processed[$i].FullName)
        try {
            $graphics.DrawImage($image, $cellX + 24, $cellY + 16, 64, 64)
        } finally {
            $image.Dispose()
        }
        $graphics.DrawString($processed[$i].BaseName, $font, $textBrush, $cellX + 4, $cellY + 91)
    }
    $sheet.Save($previewPath, [System.Drawing.Imaging.ImageFormat]::Png)
} finally {
    $font.Dispose()
    $graphics.Dispose()
    $sheet.Dispose()
}

if ($ProjectOutput) {
    foreach ($file in $processed) {
        Copy-Item -LiteralPath $file.FullName -Destination (Join-Path $ProjectOutput $file.Name) -Force:$Force
    }
}

[PSCustomObject]@{
    Source = (Resolve-Path -LiteralPath $Source).Path
    Output = (Resolve-Path -LiteralPath $Output).Path
    ProjectOutput = if ($ProjectOutput) { (Resolve-Path -LiteralPath $ProjectOutput).Path } else { '' }
    Count = $processed.Count
    CanvasSize = $CanvasSize
    Preview = $previewPath
} | Format-List

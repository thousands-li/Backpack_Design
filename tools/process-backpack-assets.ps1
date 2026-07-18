param(
    [string]$SourceDir = '',
    [string]$OutputDir = (Join-Path $PSScriptRoot '..\assets\art\ui\backpack'),
    [string]$PreviewPath = (Join-Path $PSScriptRoot '..\art_preview\backpack_ui_processed.png')
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

Add-Type -AssemblyName System.Drawing

if ([string]::IsNullOrWhiteSpace($SourceDir)) {
    $desktop = [Environment]::GetFolderPath('Desktop')
    $sourceCandidate = Get-ChildItem -LiteralPath $desktop -Directory |
        Where-Object {
            @(Get-ChildItem -LiteralPath $_.FullName -File -Filter 'jimeng-*.png' -ErrorAction SilentlyContinue).Count -ge 3
        } |
        Select-Object -First 1

    if (-not $sourceCandidate) {
        throw "No desktop directory containing jimeng PNG assets was found. Pass -SourceDir explicitly."
    }
    $SourceDir = $sourceCandidate.FullName
}

$processorSource = @'
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class BackpackAssetProcessor
{
    private struct Component
    {
        public int MinX;
        public int MinY;
        public int MaxX;
        public int MaxY;
        public int Area;

        public int Width { get { return MaxX - MinX + 1; } }
        public int Height { get { return MaxY - MinY + 1; } }
        public float CenterX { get { return (MinX + MaxX) * 0.5f; } }
        public float CenterY { get { return (MinY + MaxY) * 0.5f; } }
    }

    private static Bitmap Load32(string path)
    {
        using (var source = new Bitmap(path))
        {
            var result = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb);
            result.SetResolution(96, 96);
            using (var graphics = Graphics.FromImage(result))
            {
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.DrawImageUnscaled(source, 0, 0);
            }
            return result;
        }
    }

    private static int[] ReadPixels(Bitmap bitmap)
    {
        var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
        var data = bitmap.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
        try
        {
            int stride = Math.Abs(data.Stride);
            var raw = new byte[stride * bitmap.Height];
            Marshal.Copy(data.Scan0, raw, 0, raw.Length);
            var pixels = new int[bitmap.Width * bitmap.Height];

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
        var data = bitmap.LockBits(rect, ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
        try
        {
            int stride = Math.Abs(data.Stride);
            var raw = new byte[stride * height];

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

    private static void GetColorMetrics(int pixel, out int r, out int g, out int b, out float saturation, out float luminance)
    {
        r = (pixel >> 16) & 255;
        g = (pixel >> 8) & 255;
        b = pixel & 255;
        int max = Math.Max(r, Math.Max(g, b));
        int min = Math.Min(r, Math.Min(g, b));
        saturation = max == 0 ? 0f : (max - min) / (float)max;
        luminance = 0.2126f * r + 0.7152f * g + 0.0722f * b;
    }

    private static bool IsDefiniteForeground(int pixel)
    {
        int r, g, b;
        float saturation, luminance;
        GetColorMetrics(pixel, out r, out g, out b, out saturation, out luminance);
        return saturation > 0.16f || luminance < 158f;
    }

    private static bool IsFloodableBackground(int pixel)
    {
        int r, g, b;
        float saturation, luminance;
        GetColorMetrics(pixel, out r, out g, out b, out saturation, out luminance);
        return saturation < 0.20f && luminance > 150f;
    }

    private static List<Component> FindComponents(int[] pixels, int width, int height, int minArea)
    {
        var mask = new bool[pixels.Length];
        var visited = new bool[pixels.Length];
        for (int i = 0; i < pixels.Length; i++)
            mask[i] = IsDefiniteForeground(pixels[i]);

        var queue = new int[pixels.Length];
        var components = new List<Component>();
        int[] dx = { -1, 0, 1, -1, 1, -1, 0, 1 };
        int[] dy = { -1, -1, -1, 0, 0, 1, 1, 1 };

        for (int start = 0; start < pixels.Length; start++)
        {
            if (!mask[start] || visited[start])
                continue;

            int head = 0;
            int tail = 0;
            queue[tail++] = start;
            visited[start] = true;

            int startX = start % width;
            int startY = start / width;
            var component = new Component
            {
                MinX = startX,
                MaxX = startX,
                MinY = startY,
                MaxY = startY,
                Area = 0
            };

            while (head < tail)
            {
                int index = queue[head++];
                int x = index % width;
                int y = index / width;
                component.Area++;
                if (x < component.MinX) component.MinX = x;
                if (x > component.MaxX) component.MaxX = x;
                if (y < component.MinY) component.MinY = y;
                if (y > component.MaxY) component.MaxY = y;

                for (int n = 0; n < 8; n++)
                {
                    int nx = x + dx[n];
                    int ny = y + dy[n];
                    if (nx < 0 || ny < 0 || nx >= width || ny >= height)
                        continue;
                    int next = ny * width + nx;
                    if (mask[next] && !visited[next])
                    {
                        visited[next] = true;
                        queue[tail++] = next;
                    }
                }
            }

            if (component.Area >= minArea)
                components.Add(component);
        }

        return components;
    }

    private static Bitmap ExtractWithClosedAlpha(int[] source, int sourceWidth, int sourceHeight, Component component, int margin)
    {
        int left = Math.Max(0, component.MinX - margin);
        int top = Math.Max(0, component.MinY - margin);
        int right = Math.Min(sourceWidth - 1, component.MaxX + margin);
        int bottom = Math.Min(sourceHeight - 1, component.MaxY + margin);
        int width = right - left + 1;
        int height = bottom - top + 1;
        var crop = new int[width * height];

        for (int y = 0; y < height; y++)
            Array.Copy(source, (top + y) * sourceWidth + left, crop, y * width, width);

        var background = new bool[crop.Length];
        var queue = new int[crop.Length];
        int head = 0;
        int tail = 0;

        Action<int> addSeed = index =>
        {
            if (!background[index] && IsFloodableBackground(crop[index]))
            {
                background[index] = true;
                queue[tail++] = index;
            }
        };

        for (int x = 0; x < width; x++)
        {
            addSeed(x);
            addSeed((height - 1) * width + x);
        }
        for (int y = 0; y < height; y++)
        {
            addSeed(y * width);
            addSeed(y * width + width - 1);
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
                if (!background[next] && IsFloodableBackground(crop[next]))
                {
                    background[next] = true;
                    queue[tail++] = next;
                }
            }
        }

        for (int i = 0; i < crop.Length; i++)
        {
            if (background[i])
                crop[i] &= 0x00FFFFFF;
            else
                crop[i] |= unchecked((int)0xFF000000);
        }

        return WritePixels(width, height, crop);
    }

    private static Bitmap FitNearest(Bitmap source, int canvasSize, int inset)
    {
        var result = new Bitmap(canvasSize, canvasSize, PixelFormat.Format32bppArgb);
        result.SetResolution(96, 96);
        int available = canvasSize - inset * 2;
        float scale = Math.Min(available / (float)source.Width, available / (float)source.Height);
        int width = Math.Max(1, (int)Math.Round(source.Width * scale));
        int height = Math.Max(1, (int)Math.Round(source.Height * scale));
        int x = (canvasSize - width) / 2;
        int y = (canvasSize - height) / 2;

        using (var graphics = Graphics.FromImage(result))
        {
            graphics.Clear(Color.Transparent);
            graphics.CompositingMode = CompositingMode.SourceCopy;
            graphics.InterpolationMode = InterpolationMode.NearestNeighbor;
            graphics.PixelOffsetMode = PixelOffsetMode.Half;
            graphics.DrawImage(source, new Rectangle(x, y, width, height), 0, 0, source.Width, source.Height, GraphicsUnit.Pixel);
        }
        return result;
    }

    private static Bitmap ResizeNearest(Bitmap source, int width, int height)
    {
        var result = new Bitmap(width, height, PixelFormat.Format32bppArgb);
        result.SetResolution(96, 96);
        using (var graphics = Graphics.FromImage(result))
        {
            graphics.Clear(Color.Transparent);
            graphics.CompositingMode = CompositingMode.SourceCopy;
            graphics.InterpolationMode = InterpolationMode.NearestNeighbor;
            graphics.PixelOffsetMode = PixelOffsetMode.Half;
            graphics.DrawImage(source, new Rectangle(0, 0, width, height), 0, 0, source.Width, source.Height, GraphicsUnit.Pixel);
        }
        return result;
    }

    private static bool IsRarityColor(int pixel)
    {
        int a = (pixel >> 24) & 255;
        if (a == 0) return false;
        int r = (pixel >> 16) & 255;
        int g = (pixel >> 8) & 255;
        int b = pixel & 255;
        return g > 55 && g > r * 1.18f && g > b * 1.12f;
    }

    private static int TintPixel(int pixel, Color target)
    {
        int a = (pixel >> 24) & 255;
        int r = (pixel >> 16) & 255;
        int g = (pixel >> 8) & 255;
        int b = pixel & 255;
        float value = Math.Max(r, Math.Max(g, b)) / 255f;
        float factor = 0.28f + value * 0.90f;
        int nr = Math.Min(255, (int)Math.Round(target.R * factor));
        int ng = Math.Min(255, (int)Math.Round(target.G * factor));
        int nb = Math.Min(255, (int)Math.Round(target.B * factor));
        return (a << 24) | (nr << 16) | (ng << 8) | nb;
    }

    private static Bitmap RecolorBase(Bitmap source, Color neutral)
    {
        var pixels = ReadPixels(source);
        for (int i = 0; i < pixels.Length; i++)
        {
            if (IsRarityColor(pixels[i]))
                pixels[i] = TintPixel(pixels[i], neutral);
        }
        return WritePixels(source.Width, source.Height, pixels);
    }

    private static Bitmap CreateRarityOverlay(Bitmap source, Color target)
    {
        var sourcePixels = ReadPixels(source);
        var result = new int[sourcePixels.Length];
        for (int i = 0; i < sourcePixels.Length; i++)
        {
            if (IsRarityColor(sourcePixels[i]))
                result[i] = TintPixel(sourcePixels[i], target);
            else
                result[i] = 0;
        }
        return WritePixels(source.Width, source.Height, result);
    }

    private static Bitmap Composite(Bitmap bottom, Bitmap top)
    {
        var result = new Bitmap(bottom.Width, bottom.Height, PixelFormat.Format32bppArgb);
        result.SetResolution(96, 96);
        using (var graphics = Graphics.FromImage(result))
        {
            graphics.Clear(Color.Transparent);
            graphics.CompositingMode = CompositingMode.SourceOver;
            graphics.DrawImageUnscaled(bottom, 0, 0);
            graphics.DrawImageUnscaled(top, 0, 0);
        }
        return result;
    }

    private static Bitmap CreateButtonState(Bitmap source, float brightness, bool grayscale, int alpha, int shiftY)
    {
        var sourcePixels = ReadPixels(source);
        var transformed = new int[sourcePixels.Length];
        for (int i = 0; i < sourcePixels.Length; i++)
        {
            int pixel = sourcePixels[i];
            int a = (pixel >> 24) & 255;
            int r = (pixel >> 16) & 255;
            int g = (pixel >> 8) & 255;
            int b = pixel & 255;
            if (grayscale)
            {
                int gray = (int)Math.Round(0.2126 * r + 0.7152 * g + 0.0722 * b);
                r = g = b = gray;
            }
            r = Math.Min(255, Math.Max(0, (int)Math.Round(r * brightness)));
            g = Math.Min(255, Math.Max(0, (int)Math.Round(g * brightness)));
            b = Math.Min(255, Math.Max(0, (int)Math.Round(b * brightness)));
            a = a * alpha / 255;
            transformed[i] = (a << 24) | (r << 16) | (g << 8) | b;
        }

        using (var recolored = WritePixels(source.Width, source.Height, transformed))
        {
            var result = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb);
            result.SetResolution(96, 96);
            using (var graphics = Graphics.FromImage(result))
            {
                graphics.Clear(Color.Transparent);
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.DrawImageUnscaled(recolored, 0, shiftY);
            }
            return result;
        }
    }

    private static void Save(Bitmap bitmap, string path)
    {
        Directory.CreateDirectory(Path.GetDirectoryName(path));
        bitmap.Save(path, ImageFormat.Png);
    }

    public static void ProcessPanel(string sourcePath, string outputPath)
    {
        using (var source = Load32(sourcePath))
        using (var resized = ResizeNearest(source, 512, 512))
            Save(resized, outputPath);
    }

    public static void ProcessSlot(string sourcePath, string outputRoot)
    {
        using (var source = Load32(sourcePath))
        {
            var pixels = ReadPixels(source);
            var components = FindComponents(pixels, source.Width, source.Height, 12000);
            if (components.Count == 0)
                throw new InvalidOperationException("No inventory slot component was detected.");

            Component selected = components[0];
            double bestDistance = double.MaxValue;
            foreach (var component in components)
            {
                if (component.Width < 180 || component.Height < 180)
                    continue;
                double dx = component.CenterX - source.Width * 0.5;
                double dy = component.CenterY - source.Height * 0.5;
                double distance = dx * dx + dy * dy;
                if (distance < bestDistance)
                {
                    bestDistance = distance;
                    selected = component;
                }
            }

            using (var extracted = ExtractWithClosedAlpha(pixels, source.Width, source.Height, selected, 18))
            using (var master = FitNearest(extracted, 96, 5))
            using (var baseSlot = RecolorBase(master, Color.FromArgb(170, 164, 154)))
            {
                Save(baseSlot, Path.Combine(outputRoot, "slots", "slot_base.png"));

                var colors = new Dictionary<string, Color>
                {
                    { "common", Color.FromArgb(190, 190, 190) },
                    { "uncommon", Color.FromArgb(82, 214, 74) },
                    { "rare", Color.FromArgb(66, 165, 245) },
                    { "epic", Color.FromArgb(166, 108, 255) },
                    { "legendary", Color.FromArgb(255, 159, 45) },
                    { "special", Color.FromArgb(255, 75, 75) }
                };

                foreach (var entry in colors)
                {
                    using (var overlay = CreateRarityOverlay(master, entry.Value))
                    using (var variant = Composite(baseSlot, overlay))
                    {
                        Save(overlay, Path.Combine(outputRoot, "slots", "overlays", "slot_rarity_" + entry.Key + ".png"));
                        Save(variant, Path.Combine(outputRoot, "slots", "variants", "slot_" + entry.Key + ".png"));
                    }
                }
            }
        }
    }

    public static void ProcessButtons(string sourcePath, string outputRoot)
    {
        using (var source = Load32(sourcePath))
        {
            var pixels = ReadPixels(source);
            var components = FindComponents(pixels, source.Width, source.Height, 40000);
            var candidates = new List<Component>();
            foreach (var component in components)
            {
                if (component.Width > 300 && component.Height > 260 && component.CenterY < source.Height * 0.58f)
                    candidates.Add(component);
            }

            candidates.Sort((a, b) => a.CenterX.CompareTo(b.CenterX));
            if (candidates.Count < 3)
                throw new InvalidOperationException("Expected three top-row button components, found " + candidates.Count + ".");

            string[] names = { "stack", "close", "craft" };
            for (int i = 0; i < 3; i++)
            {
                using (var extracted = ExtractWithClosedAlpha(pixels, source.Width, source.Height, candidates[i], 24))
                using (var normal = FitNearest(extracted, 128, 5))
                using (var pressed = CreateButtonState(normal, 0.82f, false, 255, 2))
                using (var disabled = CreateButtonState(normal, 0.90f, true, 180, 0))
                {
                    Save(normal, Path.Combine(outputRoot, "buttons", "btn_" + names[i] + "_normal.png"));
                    Save(pressed, Path.Combine(outputRoot, "buttons", "btn_" + names[i] + "_pressed.png"));
                    Save(disabled, Path.Combine(outputRoot, "buttons", "btn_" + names[i] + "_disabled.png"));
                }
            }
        }
    }

    public static void ProcessSecondaryButtons(string sourcePath, string outputRoot)
    {
        using (var source = Load32(sourcePath))
        {
            var pixels = ReadPixels(source);
            var components = FindComponents(pixels, source.Width, source.Height, 18000);
            var candidates = new List<Component>();
            foreach (var component in components)
            {
                if (component.Width > 180 && component.Height > 180 && component.CenterY > source.Height * 0.35f && component.CenterY < source.Height * 0.70f)
                    candidates.Add(component);
            }

            candidates.Sort((a, b) => a.CenterX.CompareTo(b.CenterX));
            if (candidates.Count < 6)
                throw new InvalidOperationException("Expected six secondary button components, found " + candidates.Count + ".");

            int[] selectedIndices = { 0, 2, 4, 5 };
            string[] names = { "backpack", "close", "swap", "next" };
            for (int i = 0; i < selectedIndices.Length; i++)
            {
                Component selected = candidates[selectedIndices[i]];
                using (var extracted = ExtractWithClosedAlpha(pixels, source.Width, source.Height, selected, 18))
                using (var normal = FitNearest(extracted, 128, 6))
                using (var pressed = CreateButtonState(normal, 0.82f, false, 255, 2))
                using (var disabled = CreateButtonState(normal, 0.90f, true, 180, 0))
                {
                    Save(normal, Path.Combine(outputRoot, "buttons", "btn_" + names[i] + "_normal.png"));
                    Save(pressed, Path.Combine(outputRoot, "buttons", "btn_" + names[i] + "_pressed.png"));
                    Save(disabled, Path.Combine(outputRoot, "buttons", "btn_" + names[i] + "_disabled.png"));
                }
            }
        }
    }

    private static void DrawChecker(Graphics graphics, Rectangle area, int cell)
    {
        using (var light = new SolidBrush(Color.FromArgb(68, 68, 68)))
        using (var dark = new SolidBrush(Color.FromArgb(48, 48, 48)))
        {
            for (int y = area.Top; y < area.Bottom; y += cell)
            {
                for (int x = area.Left; x < area.Right; x += cell)
                {
                    bool alternate = (((x - area.Left) / cell) + ((y - area.Top) / cell)) % 2 == 0;
                    graphics.FillRectangle(alternate ? light : dark, x, y, cell, cell);
                }
            }
        }
    }

    public static void CreatePreview(string outputRoot, string previewPath)
    {
        var preview = new Bitmap(1220, 810, PixelFormat.Format32bppArgb);
        preview.SetResolution(96, 96);
        using (var graphics = Graphics.FromImage(preview))
        using (var titleFont = new Font("Arial", 20, FontStyle.Bold))
        using (var labelFont = new Font("Arial", 13, FontStyle.Regular))
        using (var textBrush = new SolidBrush(Color.White))
        {
            DrawChecker(graphics, new Rectangle(0, 0, preview.Width, preview.Height), 16);
            graphics.DrawString("Backpack UI processed assets", titleFont, textBrush, 24, 18);

            string panelPath = Path.Combine(outputRoot, "panels", "backpack_panel_4x4.png");
            using (var panel = new Bitmap(panelPath))
                graphics.DrawImageUnscaled(panel, 24, 64);

            string[] rarityNames = { "common", "uncommon", "rare", "epic", "legendary", "special" };
            for (int i = 0; i < rarityNames.Length; i++)
            {
                int x = 566 + (i % 3) * 190;
                int y = 82 + (i / 3) * 150;
                using (var slot = new Bitmap(Path.Combine(outputRoot, "slots", "variants", "slot_" + rarityNames[i] + ".png")))
                    graphics.DrawImageUnscaled(slot, x, y);
                graphics.DrawString(rarityNames[i], labelFont, textBrush, x, y + 102);
            }

            string[] buttonNames = { "stack", "close", "craft", "backpack", "swap", "next" };
            for (int i = 0; i < buttonNames.Length; i++)
            {
                int x = 566 + (i % 3) * 190;
                int y = 405 + (i / 3) * 160;
                using (var button = new Bitmap(Path.Combine(outputRoot, "buttons", "btn_" + buttonNames[i] + "_normal.png")))
                    graphics.DrawImageUnscaled(button, x, y);
                graphics.DrawString(buttonNames[i], labelFont, textBrush, x, y + 134);
            }

            graphics.DrawString("512x512 panel | 96x96 slots | 128x128 buttons | RGBA PNG", labelFont, textBrush, 566, 765);
        }

        Directory.CreateDirectory(Path.GetDirectoryName(previewPath));
        preview.Save(previewPath, ImageFormat.Png);
        preview.Dispose();
    }
}
'@

if (-not ('BackpackAssetProcessor' -as [type])) {
    Add-Type -TypeDefinition $processorSource -ReferencedAssemblies System.Drawing
}

function Find-SourceById {
    param([Parameter(Mandatory)][string]$Id)

    $match = Get-ChildItem -LiteralPath $SourceDir -File -Filter '*.png' |
        Where-Object { $_.Name -like "*-$Id-*" } |
        Select-Object -First 1

    if (-not $match) {
        throw "Source image with id $Id was not found in $SourceDir"
    }
    return $match.FullName
}

$resolvedOutput = [System.IO.Path]::GetFullPath($OutputDir)
$resolvedPreview = [System.IO.Path]::GetFullPath($PreviewPath)

[System.IO.Directory]::CreateDirectory($resolvedOutput) | Out-Null

$panelSource = Find-SourceById -Id '3916'
$slotSource = Find-SourceById -Id '8227'
$buttonSource = Find-SourceById -Id '4500'
$secondaryButtonSource = Find-SourceById -Id '6947'

[BackpackAssetProcessor]::ProcessPanel($panelSource, (Join-Path $resolvedOutput 'panels\backpack_panel_4x4.png'))
[BackpackAssetProcessor]::ProcessSlot($slotSource, $resolvedOutput)
[BackpackAssetProcessor]::ProcessButtons($buttonSource, $resolvedOutput)
[BackpackAssetProcessor]::ProcessSecondaryButtons($secondaryButtonSource, $resolvedOutput)
[BackpackAssetProcessor]::CreatePreview($resolvedOutput, $resolvedPreview)

Write-Output "Processed backpack assets: $resolvedOutput"
Write-Output "Preview: $resolvedPreview"

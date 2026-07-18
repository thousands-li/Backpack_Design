# Backpack UI art processing

Run the processing script from the project root with:

    powershell -ExecutionPolicy Bypass -File .\tools\process-backpack-assets.ps1

The script never overwrites the original source images. It currently uses:

- 3916 for the fixed 4x4 backpack panel
- 8227 for the normalized slot master
- 4500 for the stack, close, and craft buttons
- 6947 for the clean close, backpack, swap, and next buttons

Generated runtime assets are written under assets/art/ui/backpack.

## Cocos Creator import settings

- Min/Mag filter: NEAREST / POINT
- Wrap mode: CLAMP
- Mipmaps: disabled
- Keep UI transforms on integer positions and integer sizes

The slots/overlays images are intended to sit above slot_base.png.
The slots/variants images are ready-to-use flattened versions for quick prototyping.

# InkDrop

Javascript (TypeScript) color manipulation and conversion library.

## Motivation

This library doesn't perform any implicit conversions between different color models and implemented in a way so that
js compilers with dead code elimination could easily remove unused code.

## Color models

All color models are using values with a range `[0, 1]` for all properties.

- `RgbColor`
- `HsvColor`
- `HslColor`
- `HwbColor`
- `CmykColor`

## Converters

- `rgbToHsl(rgb: RgbColor): HslColor`
- `hslToRgb(hsl: HslColor): RgbColor`
- `rgbToHsv(rgb: RgbColor): HsvColor`
- `hsvToRgb(hsv: HsvColor): RgbColor`
- `rgbToHwb(rgb: RgbColor): HwbColor`
- `hwbToRgb(hwb: HwbColor): RgbColor`
- `rgbToCmyk(rgb: RgbColor): CmykColor`
- `cmykToRgb(cmyk: CmykColor): RgbColor`
- `rgbToHex(rgb: RgbColor): string`
- `hexToRgb(hex: string): RgbColor`

## Utils

- `luminance(rgb: RgbColor): number`
- `brightness(rgb: RgbColor): number`
- `isDark(rgb: RgbColor): boolean`
- `isLight(rgb: RgbColor): boolen`

## Transformation functions

- `desaturate(hsl: HslColor, amount = 0.1): HslColor`
- `saturate(hsl: HslColor, amount = 0.1): HslColor`
- `greyscale(hsl: HslColor): HslColor`
- `lighten(hsl: HslColor, amount = 0.1): HslColor`
- `darken(hsl: HslColor, amount = 0.1): HslColor`
- `brighten(rgb: RgbColor, amount = 0.1): RgbColor`
- `spin(hsl: HslColor, amount: number): HslColor`

## Combination functions

- `complement(hsl: HslColor): HslColor`
- `triad(hsl: HslColor): [HslColor, HslColor, HslColor]`
- `tetrad(hsl: HslColor): [HslColor, HslColor, HslColor, HslColor]`
- `splitComplement(hsl: HslColor): [HslColor, HslColor, HslColor]`
- `analogous(hsl: HslColor, results = 6, slices = 30): HslColor[]`
- `monochromatic(hsv: HsvColor, results = 6): HsvColor[]`

## Text formatting functions

- `formatRgbToHex(rgb: RgbColor): string`
- `formatRgbToString(rgb: RgbColor): string`
- `formatHslToString(hsl: HslColor): string`
- `formatHsvToString(hsv: HsvColor): string`

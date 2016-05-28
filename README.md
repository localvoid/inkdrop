# InkDrop

[![Build status](https://img.shields.io/travis/localvoid/inkdrop.svg?style=flat-square)](https://travis-ci.org/localvoid/inkdrop)
[![Npm version](https://img.shields.io/npm/v/inkdrop.svg?style=flat-square)](https://www.npmjs.com/package/inkdrop)
[![Npm downloads](https://img.shields.io/npm/dm/inkdrop.svg?style=flat-square)](https://www.npmjs.com/package/inkdrop)
[![License](https://img.shields.io/npm/l/inkdrop.svg?style=flat-square)](https://www.npmjs.com/package/inkdrop)

Javascript (TypeScript) color manipulation and conversion library.

## Motivation

This library doesn't perform any implicit conversions between different color models and implemented in a way so that
js compilers with dead code elimination could easily remove unused code.

## Installation

Npm package `inkdrop` provides umd modules, es6 modules at `jsnext:main` and TypeScript typings.

```sh
$ npm install inkdrop
```

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
- `contrast(a: RgbColor, b: RgbColor): number`
- `contrastLevel(contrastRatio: number): number`
- `brightness(rgb: RgbColor): number`
- `isDark(rgb: RgbColor): boolean`
- `isLight(rgb: RgbColor): boolean`

## Transformation functions

- `negate(rgb: RgbColor): RgbColor`
- `desaturate(hsl: HslColor, amount = 0.1): HslColor`
- `saturate(hsl: HslColor, amount = 0.1): HslColor`
- `greyscaleRgb(rgb: RgbColor): RgbColor`
- `greyscaleHsl(hsl: HslColor): HslColor`
- `lighten(hsl: HslColor, amount = 0.1): HslColor`
- `darken(hsl: HslColor, amount = 0.1): HslColor`
- `fadeIn(hsl: HslColor, amount = 0.1): HslColor`
- `fadeOut(hsl: HslColor, amount = 0.1): HslColor`
- `whiten(hwb: HwbColor, amount = 0.1): HwbColor`
- `blacken(hwb: HwbColor, amount = 0.1): HwbColor`
- `brighten(rgb: RgbColor, amount = 0.1): RgbColor`
- `spin(hsl: HslColor, amount: number): HslColor`
- `mixColors(a: RgbColor, b: RgbColor, amount = 0.5): RgbColor`
- `tint(rgb: RgbColor): RgbColor`
- `shade(rgb: RgbColor): RgbColor`

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

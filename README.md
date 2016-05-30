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
- `LinearRgbColor`
- `HsvColor`
- `HslColor`
- `HwbColor`
- `CmykColor`
- `XyzColor`
- `XyyColor`

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
- `linearRgbToXyz(lrgb: LinearRgb): XyzColor`
- `xyzToLinearRgb(xyz: XyzColor): LinearRgbColor`
- `xyzToXyy(xyz: XyzColor): XyyColor`
- `xyyToXyz(xyy: XyyColor): XyzColor`

## Utils

- `linearize(rgb: RgbColor): LinearRgbColor`
- `delinearize(lrgb: LinearRgbColor): RgbColor`
- `luminance(rgb: RgbColor): number`
- `contrast(a: RgbColor, b: RgbColor): number`
- `contrastLevel(contrastRatio: number): number`
- `findBestContrast(a: RgbColor, bs: RgbColor[]): RgbColor | undefined`
- `brightness(rgb: RgbColor): number`
- `isDark(rgb: RgbColor): boolean`
- `isLight(rgb: RgbColor): boolean`

## Transformation functions

- `absDesaturate(hsl: HslColor, amount = 0.1): HslColor`
- `absSaturate(hsl: HslColor, amount = 0.1): HslColor`
- `absLighten(hsl: HslColor, amount = 0.1): HslColor`
- `absDarken(hsl: HslColor, amount = 0.1): HslColor`
- `absFadeIn(hsl: HslColor, amount = 0.1): HslColor`
- `absFadeOut(hsl: HslColor, amount = 0.1): HslColor`
- `absWhiten(hwb: HwbColor, amount = 0.1): HwbColor`
- `absBlacken(hwb: HwbColor, amount = 0.1): HwbColor`
- `relDesaturate(hsl: HslColor, ratio = 0.1): HslColor`
- `relSaturate(hsl: HslColor, ratio = 0.1): HslColor`
- `relLighten(hsl: HslColor, ratio = 0.1): HslColor`
- `relDarken(hsl: HslColor, ratio = 0.1): HslColor`
- `relFadeIn(hsl: HslColor, ratio = 0.1): HslColor`
- `relFadeOut(hsl: HslColor, ratio = 0.1): HslColor`
- `relWhiten(hwb: HwbColor, ratio = 0.1): HwbColor`
- `relBlacken(hwb: HwbColor, ratio = 0.1): HwbColor`
- `spin(hsl: HslColor, amount: number): HslColor`
- `mix(a: RgbColor, b: RgbColor, amount = 0.5): RgbColor`
- `tint(rgb: RgbColor, amount = 0.5): RgbColor`
- `shade(rgb: RgbColor, amount = 0.5): RgbColor`
- `negate(rgb: RgbColor): RgbColor`
- `greyscale(rgb: RgbColor): RgbColor`

## Blend functions

- `blend(c1: RgbColor, c2: RgbColor, mode: (a: number, b: number) => number): RgbColor`
- `blendMultiply(a: RgbColor, b: RgbColor): RgbColor`
- `blendScreen(a: RgbColor, b: RgbColor): RgbColor`
- `blendOverlay(a: RgbColor, b: RgbColor): RgbColor`
- `blendSoftlight(a: RgbColor, b: RgbColor): RgbColor`
- `blendHardlight(a: RgbColor, b: RgbColor): RgbColor`
- `blendDifference(a: RgbColor, b: RgbColor): RgbColor`
- `blendExclusion(a: RgbColor, b: RgbColor): RgbColor`
- `blendAverage(a: RgbColor, b: RgbColor): RgbColor`
- `blendNegation(a: RgbColor, b: RgbColor): RgbColor`

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

## Compare functions

```txt
Epsilon:

alpha = 1 / 100
rgb colors = 1 / 255
hue = 1 / 360
saturation, lightness, value, whiteness, blackness, cyan, magenta, yellow, black = 1 / 100
```

- `almostEqualRgb(a: RgbColor, b: RgbColor): boolean`
- `almostEqualHsl(a: HslColor, b: HslColor): boolean`
- `almostEqualHsv(a: HsvColor, b: HsvColor): boolean`
- `almostEqualHwb(a: HwbColor, b: HwbColor): boolean`
- `almostEqualCmyk(a: CmykColor, b: CmykColor): boolean`

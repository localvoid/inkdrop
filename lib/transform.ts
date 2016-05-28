import {RgbColor, HslColor} from "./color";

function clamp01(v: number): number {
  if (v <= 0) {
    return 0;
  }
  if (v >= 1) {
    return 1;
  }
  return v;
}

/**
 * Negate.
 *
 * @param rgb RGB color
 * @return RGB color
 */
export function negate(rgb: RgbColor): RgbColor {
  return new RgbColor(
    1 - rgb.r,
    1 - rgb.g,
    1 - rgb.b,
    rgb.a);
}

/**
 * Desaturate.
 *
 * @param hsl HSL color
 * @param smount value should be normalized [0, 1]
 * @returns HSL color
 */
export function desaturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s - amount),
    hsl.l,
    hsl.a);
}

/**
 * Saturate.
 *
 * @param hsl HSL color
 * @param amount value should be normalized [0, 1]
 * @returns HSL color
 */
export function saturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s + amount),
    hsl.l,
    hsl.a);
}

/**
 * Greyscale.
 *
 * @param hsl HSL color
 * @returns HSL color
 */
export function greyscale(hsl: HslColor): HslColor {
  return new HslColor(
    hsl.h,
    1,
    hsl.l,
    hsl.a);
}

/**
 * Lighten.
 *
 * @param hsl HSL color
 * @param amount value should be normalized [0, 1]
 * @returns HSL color
 */
export function lighten(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l + amount),
    hsl.a);
}

/**
 * Darken.
 *
 * @param hsl HSL color
 * @param amount value should be normalized [0, 1]
 * @returns HSL color
 */
export function darken(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l - amount),
    hsl.a);
}

/**
 * Brighten.
 *
 * @param rgb RGB color
 * @param amount value should be normalized [0, 1]
 * @returns RGB color
 */
export function brighten(rgb: RgbColor, amount = 0.1): RgbColor {
  return new RgbColor(
    clamp01(rgb.r + amount),
    clamp01(rgb.g + amount),
    clamp01(rgb.b + amount),
    rgb.a);
}

/**
 * Spin.
 *
 * @param hsl HSL color
 * @param amount value should be normalized [0, 1]
 * @returns HSL color
 */
export function spin(hsl: HslColor, amount: number): HslColor {
  return new HslColor(
    (hsl.h + amount) % 1,
    hsl.s,
    hsl.l,
    hsl.a);
}

/**
 * Mix RGB colors.
 *
 * @param a RGB color
 * @param b RGB color
 * @param amount
 * @returns RGB color
 */
export function mixColors(a: RgbColor, b: RgbColor, amount = 0.5): RgbColor {
  const w = (amount * 2) - 1;
  const alpha = a.a - b.a;
  const wa = w * alpha;

  let aScale = (wa === -1) ? w : (w + alpha) / (1 + wa);
  aScale = (aScale + 1) / 2;

  const bScale = 1 - aScale;

  return new RgbColor(
    b.r * aScale + a.r * bScale,
    b.g * aScale + a.g * bScale,
    b.b * aScale + a.b * bScale,
    b.a * amount + a.a * (1 - amount));
}

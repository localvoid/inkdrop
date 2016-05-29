import {RgbColor, HslColor, HwbColor, WhiteRgbColor, BlackRgbColor} from "./color";

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
 * Desaturate.
 *
 * @param hsl HSL color
 * @param smount value should be normalized [0, 1]
 * @returns HSL color
 */
export function absDesaturate(hsl: HslColor, amount = 0.1): HslColor {
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
export function absSaturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s + amount),
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
export function absLighten(hsl: HslColor, amount = 0.1): HslColor {
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
export function absDarken(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l - amount),
    hsl.a);
}

/**
 * Fade In.
 *
 * @param hsl HSL color
 * @param amount value should be normalized [0, 1]
 * @returns HSL color
 */
export function absFadeIn(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    hsl.l,
    clamp01(hsl.a + amount));
}

/**
 * Fade Out.
 *
 * @param hsl HSL color
 * @param amount value should be normalized [0, 1]
 * @returns HSL color
 */
export function absFadeOut(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    hsl.l,
    clamp01(hsl.a - amount));
}

/**
 * Whiten.
 *
 * @param hwb HWB color
 * @returns HWB color
 */
export function absWhiten(hwb: HwbColor, amount = 0.1): HwbColor {
  return new HwbColor(
    hwb.h,
    clamp01(hwb.w + amount),
    hwb.b,
    hwb.a);
}

/**
 * Blacken.
 *
 * @param hwb HWB color
 * @returns HWB color
 */
export function absBlacken(hwb: HwbColor, amount = 0.1): HwbColor {
  return new HwbColor(
    hwb.h,
    hwb.w,
    clamp01(hwb.b + amount),
    hwb.a);
}

/**
 * Brighten.
 *
 * @param rgb RGB color
 * @param amount value should be normalized [0, 1]
 * @returns RGB color
 */
export function absBrighten(rgb: RgbColor, amount = 0.1): RgbColor {
  return new RgbColor(
    clamp01(rgb.r + amount),
    clamp01(rgb.g + amount),
    clamp01(rgb.b + amount),
    rgb.a);
}

/**
 * Desaturate.
 *
 * @param hsl HSL color
 * @param ratio value should be normalized [0, 1]
 * @returns HSL color
 */
export function relDesaturate(hsl: HslColor, ratio = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s - (hsl.s * ratio)),
    hsl.l,
    hsl.a);
}

/**
 * Saturate.
 *
 * @param hsl HSL color
 * @param ratio value should be normalized [0, 1]
 * @returns HSL color
 */
export function relSaturate(hsl: HslColor, ratio = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s + (hsl.s * ratio)),
    hsl.l,
    hsl.a);
}

/**
 * Lighten.
 *
 * @param hsl HSL color
 * @param ratio value should be normalized [0, 1]
 * @returns HSL color
 */
export function relLighten(hsl: HslColor, ratio = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l + (hsl.l * ratio)),
    hsl.a);
}

/**
 * Darken.
 *
 * @param hsl HSL color
 * @param ratio value should be normalized [0, 1]
 * @returns HSL color
 */
export function relDarken(hsl: HslColor, ratio = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l - (hsl.l * ratio)),
    hsl.a);
}

/**
 * Fade In.
 *
 * @param hsl HSL color
 * @param ratio value should be normalized [0, 1]
 * @returns HSL color
 */
export function relFadeIn(hsl: HslColor, ratio = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    hsl.l,
    clamp01(hsl.a + (hsl.a * ratio)));
}

/**
 * Fade Out.
 *
 * @param hsl HSL color
 * @param ratio value should be normalized [0, 1]
 * @returns HSL color
 */
export function relFadeOut(hsl: HslColor, ratio = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    hsl.l,
    clamp01(hsl.a - (hsl.a * ratio)));
}

/**
 * Whiten.
 *
 * @param hwb HWB color
 * @param ratio value should be normalized [0, 1]
 * @returns HWB color
 */
export function relWhiten(hwb: HwbColor, ratio = 0.1): HwbColor {
  return new HwbColor(
    hwb.h,
    clamp01(hwb.w + (hwb.w * ratio)),
    hwb.b,
    hwb.a);
}

/**
 * Blacken.
 *
 * @param hwb HWB color
 * @param ratio value should be normalized [0, 1]
 * @returns HWB color
 */
export function relBlacken(hwb: HwbColor, ratio = 0.1): HwbColor {
  return new HwbColor(
    hwb.h,
    hwb.w,
    clamp01(hwb.b + (hwb.b * ratio)),
    hwb.a);
}

/**
 * Brighten.
 *
 * @param rgb RGB color
 * @param ratio value should be normalized [0, 1]
 * @returns RGB color
 */
export function relBrighten(rgb: RgbColor, ratio = 0.1): RgbColor {
  return new RgbColor(
    clamp01(rgb.r + (rgb.r * ratio)),
    clamp01(rgb.g + (rgb.g * ratio)),
    clamp01(rgb.b + (rgb.b * ratio)),
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
export function mix(a: RgbColor, b: RgbColor, amount = 0.5): RgbColor {
  const w = (amount * 2) - 1;
  const alpha = a.a - b.a;
  const wa = w * alpha;

  const aScale = (((wa === -1) ? w : (w + alpha) / (1 + wa)) + 1) / 2;
  const bScale = 1 - aScale;

  return new RgbColor(
    a.r * aScale + b.r * bScale,
    a.g * aScale + b.g * bScale,
    a.b * aScale + b.b * bScale,
    a.a * amount + b.a * (1 - amount));
}

/**
 * Tint.
 *
 * Mix with white color.
 *
 * @param rgb RGB color
 * @param amount
 * @return RGB color
 */
export function tint(rgb: RgbColor, amount?: number): RgbColor {
  return mix(WhiteRgbColor, rgb, amount);
}

/**
 * Shade.
 *
 * Mix with black color.
 *
 * @param rgb RGB color
 * @param amount
 * @return RGB color
 */
export function shade(rgb: RgbColor, amount?: number): RgbColor {
  return mix(BlackRgbColor, rgb, amount);
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
 * Greyscale.
 *
 * @param rgb RGB color
 * @returns RGB color
 */
export function greyscale(rgb: RgbColor): RgbColor {
  const v = (rgb.r * 0.3) + (rgb.g * 0.59) + (rgb.g * 0.11);
  return new RgbColor(v, v, v, rgb.a);
}

/**
 * Greyscale.
 *
 * @param hsl HSL color
 * @returns HSL color
 */
export function greyscaleHsl(hsl: HslColor): HslColor {
  return new HslColor(
    hsl.h,
    0,
    hsl.l,
    hsl.a);
}

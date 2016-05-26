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

export function desaturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s - amount),
    hsl.l,
    hsl.a);
}

export function saturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    clamp01(hsl.s + amount),
    hsl.l,
    hsl.a);
}

export function greyscale(hsl: HslColor): HslColor {
  return new HslColor(
    hsl.h,
    1,
    hsl.l,
    hsl.a);
}

export function lighten(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l + amount),
    hsl.a);
}

export function darken(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(
    hsl.h,
    hsl.s,
    clamp01(hsl.l - amount),
    hsl.a);
}

export function brighten(rgb: RgbColor, amount = 0.1): RgbColor {
  return new RgbColor(
    clamp01(rgb.r + amount),
    clamp01(rgb.g + amount),
    clamp01(rgb.b + amount),
    rgb.a);
}

export function spin(hsl: HslColor, amount: number): HslColor {
  const hue = ((hsl.h * 360) + amount) % 360;
  return new HslColor(
    ((hue < 0) ? 360 + hue : hue) / 360,
    hsl.s,
    hsl.l,
    hsl.a);
}

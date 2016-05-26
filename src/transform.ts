import {RgbColor, HslColor} from "./color";

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

export function desaturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(hsl.h, clamp01(hsl.s - amount), hsl.l, hsl.a);
}

export function saturate(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(hsl.h, clamp01(hsl.s + amount), hsl.l, hsl.a);
}

export function greyscale(hsl: HslColor): HslColor {
  return new HslColor(hsl.h, 1, hsl.l, hsl.a);
}

export function lighten(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(hsl.h, hsl.s, clamp01(hsl.l + amount), hsl.a);
}

export function darken(hsl: HslColor, amount = 0.1): HslColor {
  return new HslColor(hsl.h, hsl.s, clamp01(hsl.l - amount), hsl.a);
}

export function brighten(rgb: RgbColor, amount = 10): RgbColor {
  const r = Math.max(0, Math.min(255, rgb.r - Math.round(-255 * (amount / 100))));
  const g = Math.max(0, Math.min(255, rgb.g - Math.round(-255 * (amount / 100))));
  const b = Math.max(0, Math.min(255, rgb.b - Math.round(-255 * (amount / 100))));
  return new RgbColor(r, g, b, rgb.a);
}

export function spin(hsl: HslColor, amount: number): HslColor {
  const hue = ((hsl.h * 360) + amount) % 360;
  return new HslColor(((hue < 0) ? 360 + hue : hue) / 360, hsl.s, hsl.l, hsl.a);
}

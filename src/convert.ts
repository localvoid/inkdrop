import {RgbColor, HsvColor, HslColor} from "./color";

export function rgbToHsl(rgb: RgbColor): HslColor {
  const r = rgb.r;
  const g = rgb.g;
  const b = rgb.b;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = (max + min) / 2;
  let s = h;
  let l = h;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;

    s = (l > 0.5) ?
      d / (2 - max - min) :
      d / (max + min);

    if (max === r) {
      h = ((g - b) / d) + ((g < b) ? 6 : 0);
    } else if (max === g) {
      h = ((b - r) / d) + 2;
    } else {
      h = ((r - g) / d) + 4;
    }

    h /= 6;
  }

  return new HslColor(h, s, l, rgb.a);
}

function hueToRgb(p: number, q: number, t: number): number {
  if (t < 0) {
    t++;
  }
  if (t > 1) {
    t--;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

export function hslToRgb(hsl: HslColor): RgbColor {
  const h = hsl.h;
  const s = hsl.s;
  const l = hsl.l;

  if (s === 0) {
    return new RgbColor(1, 1, 1, hsl.a);
  }

  const q = (l < 0.5) ?
    l * (1 + s) :
    l + s - (l * s);

  const p = (2 * l) - q;

  return new RgbColor(
    hueToRgb(p, q, h + (1 / 3)),
    hueToRgb(p, q, h),
    hueToRgb(p, q, h - (1 / 3)),
    hsl.a);
}

export function rgbToHsv(rgb: RgbColor): HsvColor {
  const r = rgb.r;
  const g = rgb.g;
  const b = rgb.b;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = max;
  let s = max;
  let v = max;

  const d = max - min;
  s = (max === 0) ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    if (max === r) {
      h = ((g - b) / d) + ((g < b) ? 6 : 0);
    } else if (max === g) {
      h = ((b - r) / d) + 2;
    } else {
      h = ((r - g) / d) + 4;
    }

    h /= 6;
  }

  return new HsvColor(h, s, v, rgb.a);
}

export function hsvToRgb(hsv: HsvColor): RgbColor {
  const h = hsv.h * 6;
  const s = hsv.s;
  const v = hsv.v;

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - (f * s));
  const t = v * (1 - ((1 - f) * s));
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return new RgbColor(r, g, b, hsv.a);
}

export function rgbToHex(rgb: RgbColor): string {
  const v =
    ((Math.round(rgb.r * 255) << 16) +
     (Math.round(rgb.g * 255) << 8) +
     Math.round(rgb.b * 255)) |
    (1 << 24);

  return v.toString(16).substring(1);
}

export function hexToRgb(hex: string): RgbColor {
  const n = parseInt(hex, 16);

  return new RgbColor(
    (n >> 16) & 0xff,
    (n >> 8) & 0xff,
    n & 0xff,
    1);
};

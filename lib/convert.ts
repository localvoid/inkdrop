import {RgbColor, LinearRgbColor, HsvColor, HslColor, HwbColor, CmykColor, XyzColor, XyyColor, LabColor,
  WhiteD65Color} from "./color";

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

export function rgbToHwb(rgb: RgbColor): HwbColor {
  const hsl = rgbToHsl(rgb);
  const w = Math.min(rgb.r, rgb.g, rgb.b);
  const b = 1 - Math.max(rgb.r, rgb.g, rgb.b);

  return new HwbColor(hsl.h, w, b, rgb.a);
}

export function hwbToRgb(hwb: HwbColor): RgbColor {
  let w = hwb.w;
  let b = hwb.b;

  const ratio = w + b;
  if (ratio > 1) { // normalize if sum of `w` and `b` is more than 1
    w /= ratio;
    b /= ratio;
  }

  const h = hwb.h * 6;
  const i = Math.floor(h);
  const v = 1 - b;
  let f = h - i;

  if ((i & 1) !== 0) { // is odd
    f = 1 - f;
  }

  const n = w + (f * (v - w)); // lerp between `w` a `v`
  let r: number;
  let g: number;

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = w; break;
    case 1: r = n; g = v; b = w; break;
    case 2: r = w; g = v; b = n; break;
    case 3: r = w; g = n; b = v; break;
    case 4: r = n; g = w; b = v; break;
    case 5: r = v; g = w; b = n; break;
  }

  return new RgbColor(r, g, b, hwb.a);
}

export function rgbToCmyk(rgb: RgbColor): CmykColor {
  const k = Math.min(1 - rgb.r, 1 - rgb.g, 1 - rgb.b);
  const i = 1 - k;
  let c = (i - rgb.r) / i;
  let m = (i - rgb.g) / i;
  let y = (i - rgb.b) / i;
  if (c !== c) { // isNaN
    c = 0;
  }
  if (m !== m) { // isNaN
    m = 0;
  }
  if (y !== y) { // isNaN
    y = 0;
  }

  return new CmykColor(c, m, y, k, rgb.a);
}

export function cmykToRgb(cmyk: CmykColor): RgbColor {
  const k = cmyk.k;
  const i = 1 - k;
  const r = 1 - Math.min(1, (cmyk.c * i) + k);
  const g = 1 - Math.min(1, (cmyk.m * i) + k);
  const b = 1 - Math.min(1, (cmyk.y * i) + k);

  return new RgbColor(r, g, b, cmyk.a);
}

export function rgbToHex(rgb: RgbColor): string {
  const v =
    ((Math.round(rgb.r * 255) << 16) +
     (Math.round(rgb.g * 255) << 8) +
     (Math.round(rgb.b * 255))) |
    (1 << 24);

  return v.toString(16).substring(1);
}

export function hexToRgb(hex: string): RgbColor {
  const n = parseInt(hex, 16);

  return new RgbColor(
    ((n >> 16) & 0xff) / 255,
    ((n >> 8) & 0xff) / 255,
    (n & 0xff) / 255,
    1);
}

export function linearRgbToXyz(lrgb: LinearRgbColor): XyzColor {
  return new XyzColor(
    0.4124564 * lrgb.r + 0.3575761 * lrgb.g + 0.1804375 * lrgb.b,
    0.2126729 * lrgb.r + 0.7151522 * lrgb.g + 0.0721750 * lrgb.b,
    0.0193339 * lrgb.r + 0.1191920 * lrgb.g + 0.9503041 * lrgb.b);
}

export function xyzToLinearRgb(xyz: XyzColor): LinearRgbColor {
  return new LinearRgbColor(
    3.2404542 * xyz.x - 1.5371385 * xyz.y - 0.4985314 * xyz.z,
    -0.9692660 * xyz.x + 1.8760108 * xyz.y + 0.0415560 * xyz.z,
    0.0556434 * xyz.x - 0.2040259 * xyz.y + 1.0572252 * xyz.z);
}

function _xyzToXyy(xyz: XyzColor, w: RgbColor): XyyColor {
  const n = xyz.x + xyz.y + xyz.z;
  if (Math.abs(n) < 1e-14) {
    const wsum = w.r + w.g + w.b;
    return new XyyColor(
      w.r / wsum,
      w.g / wsum,
      xyz.y,
      xyz.a);
  }
  return new XyyColor(
    xyz.x / n,
    xyz.y / n,
    xyz.y,
    xyz.a);
}

export function xyzToXyy(xyz: XyzColor): XyyColor {
  return _xyzToXyy(xyz, WhiteD65Color);
}

export function xyyToXyz(xyy: XyyColor): XyzColor {
  if ((-1e-14 < xyy.y) && (xyy.y < 1e-14)) {
    return new XyzColor(0, xyy.Y, 0, xyy.a);
  }
  return new XyzColor(
    xyy.Y / xyy.y * xyy.x,
    xyy.Y,
    xyy.Y / xyy.y * (1 - xyy.x, xyy.y),
    xyy.a);
}

function _labF(t: number): number {
  if (t > 6 / 29 * 6 / 29 * 6 / 29) {
    return Math.cbrt(t);
  }
  return t / 3 * 29 / 6 * 29 / 6 + 4 / 29;
}

function _labFInverse(t: number): number {
  if (t > 6 / 29) {
    return t * t * t;
  }
  return 3 * 6 / 29 * 6 / 29 * (t - 4 / 29);
}

function _xyzToLab(xyz: XyzColor, w: RgbColor): LabColor {
  const fy = _labF(xyz.y / w.r);

  return new LabColor(
    1.16 * fy - 0.16,
    5 * (_labF(xyz.x / w.r) - fy),
    2 * (fy - _labF(xyz.z / w.b)),
    xyz.a);
}

function _labToXyz(lab: LabColor, w: RgbColor): XyzColor {
  const l2 = (lab.l + 0.16) / 1.16;

  return new XyzColor(
    w.r * _labFInverse(l2 + lab.a / 5.0),
    w.g * _labFInverse(l2),
    w.b * _labFInverse(l2 - lab.b / 2.0),
    lab.alpha);
}

export function xyzToLab(xyz: XyzColor): LabColor {
  return _xyzToLab(xyz, WhiteD65Color);
}

export function labToXyz(lab: LabColor): XyzColor {
  return _labToXyz(lab, WhiteD65Color);
}

import {RgbColor, HsvColor, HslColor, HwbColor, CmykColor, XyzColor, XyyColor, LabColor, LchColor,
  WhiteD65Color} from "./color";
import {clampRgb} from "./utils";

function _rgbLinearize(v: number): number {
  if (v <= 0.04045) {
    return v / 12.92;
  }
  return Math.pow((v + 0.055) / 1.055, 2.4);
}

export function _rgbDelinearize(v: number): number {
  if (v <= 0.0031308) {
    return 12.92 * v;
  }
  return (1.055 * Math.pow(v, 1 / 2.4)) - 0.055;
}

/**
 * Linearize RGB color.
 *
 * http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
 */
export function rgbLinearize(rgb: RgbColor): RgbColor {
  return new RgbColor(_rgbLinearize(rgb.r), _rgbLinearize(rgb.g), _rgbLinearize(rgb.b), rgb.alpha);
}

/**
 * Delinearize RGB color.
 */
export function rgbDelinearize(lrgb: RgbColor): RgbColor {
  return new RgbColor(_rgbDelinearize(lrgb.r), _rgbDelinearize(lrgb.g), _rgbDelinearize(lrgb.b), lrgb.alpha);
}

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

  return new HslColor(h, s, l, rgb.alpha);
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
    return new RgbColor(1, 1, 1, hsl.alpha);
  }

  const q = (l < 0.5) ?
    l * (1 + s) :
    l + s - (l * s);

  const p = (2 * l) - q;

  return new RgbColor(
    hueToRgb(p, q, h + (1 / 3)),
    hueToRgb(p, q, h),
    hueToRgb(p, q, h - (1 / 3)),
    hsl.alpha);
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

  return new HsvColor(h, s, v, rgb.alpha);
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

  return new RgbColor(r, g, b, hsv.alpha);
}

export function rgbToHwb(rgb: RgbColor): HwbColor {
  const hsl = rgbToHsl(rgb);
  const w = Math.min(rgb.r, rgb.g, rgb.b);
  const b = 1 - Math.max(rgb.r, rgb.g, rgb.b);

  return new HwbColor(hsl.h, w, b, rgb.alpha);
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

  return new RgbColor(r, g, b, hwb.alpha);
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

  return new CmykColor(c, m, y, k, rgb.alpha);
}

export function cmykToRgb(cmyk: CmykColor): RgbColor {
  const k = cmyk.k;
  const i = 1 - k;
  const r = 1 - Math.min(1, (cmyk.c * i) + k);
  const g = 1 - Math.min(1, (cmyk.m * i) + k);
  const b = 1 - Math.min(1, (cmyk.y * i) + k);

  return new RgbColor(r, g, b, cmyk.alpha);
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

export function linearRgbToXyz(lrgb: RgbColor): XyzColor {
  return new XyzColor(
    0.4124564 * lrgb.r + 0.3575761 * lrgb.g + 0.1804375 * lrgb.b,
    0.2126729 * lrgb.r + 0.7151522 * lrgb.g + 0.0721750 * lrgb.b,
    0.0193339 * lrgb.r + 0.1191920 * lrgb.g + 0.9503041 * lrgb.b);
}

export function xyzToLinearRgb(xyz: XyzColor): RgbColor {
  return new RgbColor(
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
      xyz.alpha);
  }
  return new XyyColor(
    xyz.x / n,
    xyz.y / n,
    xyz.y,
    xyz.alpha);
}

export function xyzToXyy(xyz: XyzColor): XyyColor {
  return _xyzToXyy(xyz, WhiteD65Color);
}

export function xyyToXyz(xyy: XyyColor): XyzColor {
  if ((-1e-14 < xyy.y) && (xyy.y < 1e-14)) {
    return new XyzColor(0, xyy.Y, 0, xyy.alpha);
  }
  return new XyzColor(
    xyy.Y / xyy.y * xyy.x,
    xyy.Y,
    xyy.Y / xyy.y * (1 - xyy.x, xyy.y),
    xyy.alpha);
}

const LabT0 = 4 / 29;
const LabT1 = 6 / 29;
const LabT2 = 3 * LabT1 ** 2;
const LabT3 = LabT1 ** 3;

function _labF(t: number): number {
  if (t > LabT3) {
    return Math.pow(t, 1 / 3);
  }
  return t / LabT2 + LabT0;
}

function _labFInverse(t: number): number {
  if (t > LabT0) {
    return t ** 3;
  }
  return LabT2 * (t - LabT1);
}

function _xyzToLab(xyz: XyzColor, w: RgbColor): LabColor {
  const fy = _labF(xyz.y / w.r);

  return new LabColor(
    1.16 * fy - 0.16,
    5 * (_labF(xyz.x / w.r) - fy),
    2 * (fy - _labF(xyz.z / w.b)),
    xyz.alpha);
}

function _labToXyz(lab: LabColor, w: RgbColor): XyzColor {
  const l2 = (lab.l + 0.16) / 1.16;

  return new XyzColor(
    w.r * _labFInverse(l2 + lab.a / 5),
    w.g * _labFInverse(l2),
    w.b * _labFInverse(l2 - lab.b / 2),
    lab.alpha);
}

export function xyzToLab(xyz: XyzColor): LabColor {
  return _xyzToLab(xyz, WhiteD65Color);
}

export function labToXyz(lab: LabColor): XyzColor {
  return _labToXyz(lab, WhiteD65Color);
}

const PI2 = Math.PI * 2;

export function labToLch(lab: LabColor): LchColor {
  return new LchColor(
    lab.l,
    Math.sqrt(lab.a ** 2 + lab.b ** 2),
    (Math.atan2(lab.b, lab.a) / PI2 + 1) % 1,
    lab.a);
}

export function lchToLab(lch: LchColor): LabColor {
  const h = lch.h * PI2;
  return new LabColor(
    lch.l,
    Math.cos(h) * lch.c,
    Math.sin(h) * lch.c,
    lch.alpha);
}

// shortcuts

/**
 * sRGB to LAB
 *
 * sRGB -> lRGB -> XYZ -> LAB
 */
export function rgbToLab(rgb: RgbColor): LabColor {
  return xyzToLab(linearRgbToXyz(rgbLinearize(rgb)));
}

/**
 * LAB to sRGB
 *
 * LAB -> XYZ -> lRGB -> sRGB
 */
export function labToRgb(lab: LabColor): RgbColor {
  return clampRgb(rgbDelinearize(xyzToLinearRgb(labToXyz(lab))));
}

/**
 * sRGB to LCH
 *
 * sRGB -> lRGB -> XYZ -> LAB -> LCH
 */
export function rgbToLch(rgb: RgbColor): LchColor {
  return labToLch(rgbToLab(rgb));
}

/**
 * LCH to sRGB
 *
 * LCH -> LAB -> XYZ -> lRGB -> sRGB
 */
export function lchToRgb(lch: LchColor): RgbColor {
  return labToRgb(lchToLab(lch));
}

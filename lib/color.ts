/**
 * RGB Color.
 */
export class RgbColor {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly alpha: number;

  constructor(r: number, g: number, b: number, alpha = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = alpha;
  }
}

/**
 * HSV Color.
 */
export class HsvColor {
  readonly h: number;
  readonly s: number;
  readonly v: number;
  readonly alpha: number;

  constructor(h: number, s: number, v: number, alpha = 1) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.alpha = alpha;
  }
}

/**
 * HSL Color.
 */
export class HslColor {
  readonly h: number;
  readonly s: number;
  readonly l: number;
  readonly alpha: number;

  constructor(h: number, s: number, l: number, alpha = 1) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.alpha = alpha;
  }
}

/**
 * HWB Color.
 */
export class HwbColor {
  readonly h: number;
  readonly w: number;
  readonly b: number;
  readonly alpha: number;

  constructor(h: number, w: number, b: number, alpha = 1) {
    this.h = h;
    this.w = w;
    this.b = b;
    this.alpha = alpha;
  }
}

/**
 * CMYK Color.
 */
export class CmykColor {
  readonly c: number;
  readonly m: number;
  readonly y: number;
  readonly k: number;
  readonly alpha: number;

  constructor(c: number, m: number, y: number, k: number, alpha = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.alpha = alpha;
  }
}

/**
 * xyz Color.
 */
export class XyzColor {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly alpha: number;

  constructor(x: number, y: number, z: number, alpha = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.alpha = alpha;
  }
}

/**
 * xyY Color.
 */
export class XyyColor {
  readonly x: number;
  readonly y: number;
  readonly Y: number;
  readonly alpha: number;

  constructor(x: number, y: number, Y: number, alpha = 1) {
    this.x = x;
    this.y = y;
    this.Y = Y;
    this.alpha = alpha;
  }
}

/**
 * LAB Color.
 */
export class LabColor {
  readonly l: number;
  readonly a: number;
  readonly b: number;
  readonly alpha: number;

  constructor(l: number, a: number, b: number, alpha = 1) {
    this.l = l;
    this.a = a;
    this.b = b;
    this.alpha = alpha;
  }
}

/**
 * LCH Color.
 */
export class LchColor {
  readonly l: number;
  readonly c: number;
  readonly h: number;
  readonly alpha: number;

  constructor(l: number, c: number, h: number, alpha = 1) {
    this.l = l;
    this.c = c;
    this.h = h;
    this.alpha = alpha;
  }
}

export const WhiteD65Color = new RgbColor(0.95047, 1.00000, 1.08883);
export const WhiteD50Color = new RgbColor(0.96422, 1.00000, 0.82521);
export const WhiteRgbColor = new RgbColor(1, 1, 1);
export const BlackRgbColor = new RgbColor(0, 0, 0);

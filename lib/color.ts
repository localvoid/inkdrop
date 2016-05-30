/**
 * RGB Color.
 */
export class RgbColor {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;

  constructor(r: number, g: number, b: number, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

/**
 * Linear RGB Color.
 */
export class LinearRgbColor {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number;

  constructor(r: number, g: number, b: number, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

/**
 * HSV Color.
 */
export class HsvColor {
  readonly h: number;
  readonly s: number;
  readonly v: number;
  readonly a: number;

  constructor(h: number, s: number, v: number, a = 1) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
}

/**
 * HSL Color.
 */
export class HslColor {
  readonly h: number;
  readonly s: number;
  readonly l: number;
  readonly a: number;

  constructor(h: number, s: number, l: number, a = 1) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
}

/**
 * HWB Color.
 */
export class HwbColor {
  readonly h: number;
  readonly w: number;
  readonly b: number;
  readonly a: number;

  constructor(h: number, w: number, b: number, a = 1) {
    this.h = h;
    this.w = w;
    this.b = b;
    this.a = a;
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
  readonly a: number;

  constructor(c: number, m: number, y: number, k: number, a = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }
}

/**
 * xyz Color.
 */
export class XyzColor {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  readonly a: number;

  constructor(x: number, y: number, z: number, a = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = a;
  }
}

/**
 * xyY Color.
 */
export class XyyColor {
  readonly x: number;
  readonly y: number;
  readonly Y: number;
  readonly a: number;

  constructor(x: number, y: number, Y: number, a = 1) {
    this.x = x;
    this.y = y;
    this.Y = Y;
    this.a = a;
  }
}

export const WhiteD65Color = new RgbColor(0.95047, 1.00000, 1.08883);
export const WhiteD50Color = new RgbColor(0.96422, 1.00000, 0.82521);
export const WhiteRgbColor = new RgbColor(1, 1, 1);
export const BlackRgbColor = new RgbColor(0, 0, 0);

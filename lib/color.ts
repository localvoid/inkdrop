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

export const WhiteRgbColor = new RgbColor(1, 1, 1);
export const BlackRgbColor = new RgbColor(0, 0, 0);

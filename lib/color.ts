const EqAlphaDelta = 1 / 255;
const EqRgbDelta = 3 / 255;
const EqHueDelta = 1 / 360;
const EqPercentDelta = 1 / 100;
const EqPercent2Delta = 2 * EqPercentDelta;
const EqPercent4Delta = 4 * EqPercentDelta;

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

  equals(other: RgbColor): boolean {
    if ((this === other) ||
        (((Math.abs(this.r - other.r) + Math.abs(this.g - other.g) + Math.abs(this.b - other.b)) < EqRgbDelta) &&
          Math.abs(this.a - other.a) < EqAlphaDelta)) {
      return true;
    }
    return false;
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

  equals(other: HsvColor): boolean {
    if ((this === other) ||
        ((Math.abs(this.h - other.h) < EqHueDelta) &&
         ((Math.abs(this.s - other.s) + Math.abs(this.v - other.v)) < EqPercent2Delta) &&
         (Math.abs(this.a - other.a) < EqAlphaDelta))) {
      return true;
    }
    return false;
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

  equals(other: HslColor): boolean {
    if ((this === other) ||
        ((Math.abs(this.h - other.h) < EqHueDelta) &&
         ((Math.abs(this.s - other.s) + Math.abs(this.l - other.l)) < EqPercent2Delta) &&
         (Math.abs(this.a - other.a) < EqAlphaDelta))) {
      return true;
    }
    return false;
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

  equals(other: HwbColor): boolean {
    if ((this === other) ||
        ((Math.abs(this.h - other.h) < EqHueDelta) &&
         ((Math.abs(this.w - other.w) + Math.abs(this.b - other.b)) < EqPercent2Delta) &&
         (Math.abs(this.a - other.a) < EqAlphaDelta))) {
      return true;
    }
    return false;
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

  equals(other: CmykColor): boolean {
    if ((this === other) ||
        (((Math.abs(this.c - other.c) +
           Math.abs(this.m - other.m) +
           Math.abs(this.y - other.y) +
           Math.abs(this.k - other.k)) < EqPercent4Delta) &&
          Math.abs(this.a - other.a) < EqAlphaDelta)) {
      return true;
    }
    return false;
  }
}

export const WhiteRgbColor = new RgbColor(1, 1, 1);
export const BlackRgbColor = new RgbColor(0, 0, 0);

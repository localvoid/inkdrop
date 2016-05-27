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
        (this.r === other.r &&
         this.g === other.g &&
         this.b === other.b &&
         this.a === other.a)) {
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
        (this.h === other.h &&
         this.s === other.s &&
         this.v === other.v &&
         this.a === other.a)) {
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
        (this.h === other.h &&
         this.s === other.s &&
         this.l === other.l &&
         this.a === other.a)) {
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
        (this.h === other.h &&
         this.w === other.w &&
         this.b === other.b &&
         this.a === other.a)) {
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
        (this.c === other.c &&
         this.m === other.m &&
         this.y === other.y &&
         this.k === other.k &&
         this.a === other.a)) {
      return true;
    }
    return false;
  }
}

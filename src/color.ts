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
    if ((this === other) || (this.r === other.r && this.g === other.g && this.b === other.b)) {
      return true;
    }
    return false;
  }
}

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
    if ((this === other) || (this.h === other.h && this.s === other.s && this.v === other.v)) {
      return true;
    }
    return false;
  }
}

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
    if ((this === other) || (this.h === other.h && this.s === other.s && this.l === other.l)) {
      return true;
    }
    return false;
  }
}

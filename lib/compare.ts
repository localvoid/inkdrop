import {RgbColor, HsvColor, HslColor, HwbColor, CmykColor} from "./color";

const EqAlphaDelta = 1 / 255;
const EqRgbDelta = 3 / 255;
const EqHueDelta = 1 / 360;
const EqPercentDelta = 1 / 100;
const EqPercent2Delta = 2 * EqPercentDelta;
const EqPercent4Delta = 4 * EqPercentDelta;

export function almostEqualRgb(a: RgbColor, b: RgbColor): boolean {
  if ((a === b) ||
    (((Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b)) < EqRgbDelta) &&
      Math.abs(a.a - b.a) < EqAlphaDelta)) {
    return true;
  }
  return false;
}

export function almostEqualHsv(a: HsvColor, b: HsvColor): boolean {
  if ((a === b) ||
    ((Math.abs(a.h - b.h) < EqHueDelta) &&
      ((Math.abs(a.s - b.s) + Math.abs(a.v - b.v)) < EqPercent2Delta) &&
      (Math.abs(a.a - b.a) < EqAlphaDelta))) {
    return true;
  }
  return false;
}

export function almostEqualHsl(a: HslColor, b: HslColor): boolean {
  if ((a === b) ||
    ((Math.abs(a.h - b.h) < EqHueDelta) &&
      ((Math.abs(a.s - b.s) + Math.abs(a.l - b.l)) < EqPercent2Delta) &&
      (Math.abs(a.a - b.a) < EqAlphaDelta))) {
    return true;
  }
  return false;
}

export function almostEqualHwb(a: HwbColor, b: HwbColor): boolean {
  if ((a === b) ||
    ((Math.abs(a.h - b.h) < EqHueDelta) &&
      ((Math.abs(a.w - b.w) + Math.abs(a.b - b.b)) < EqPercent2Delta) &&
      (Math.abs(a.a - b.a) < EqAlphaDelta))) {
    return true;
  }
  return false;
}

export function almostEqualCmyk(a: CmykColor, b: CmykColor): boolean {
    if ((a === b) ||
        (((Math.abs(a.c - b.c) +
           Math.abs(a.m - b.m) +
           Math.abs(a.y - b.y) +
           Math.abs(a.k - b.k)) < EqPercent4Delta) &&
          Math.abs(a.a - b.a) < EqAlphaDelta)) {
      return true;
    }
    return false;
  }

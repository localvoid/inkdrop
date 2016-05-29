import {RgbColor} from "./color";

/**
 * Color blending.
 *
 * http://www.w3.org/TR/compositing-1
 */
export function blend(c1: RgbColor, c2: RgbColor, mode: (a: number, b: number) => number): RgbColor {
  let c: number;
  const a = c2.a + (c1.a * (1 - c2.a));

  c = mode(c1.r, c2.r);
  if (a !== 0) {
    c = ((c2.a * c2.r) + (c1.a * (c1.r - (c2.a * (c1.r + c2.r - c))))) / a;
  }
  const r = c;

  c = mode(c1.g, c2.g);
  if (a !== 0) {
    c = ((c2.a * c2.g) + (c1.a * (c1.g - (c2.a * (c1.g + c2.g - c))))) / a;
  }
  const g = c;

  c = mode(c1.b, c2.b);
  if (a !== 0) {
    c = ((c2.a * c2.b) + (c1.a * (c1.b - (c2.a * (c1.b + c2.b - c))))) / a;
  }
  const b = c;

  return new RgbColor(r, g, b, a);
}

function _multiply(a: number, b: number): number {
  return a * b;
}

function _screen(a: number, b: number): number {
  return a + b - (a * b);
}

function _overlay(a: number, b: number): number {
  a *= 2;
  return (a <= 1) ?
    _multiply(a, b) :
    _screen(a - 1, b);
}

function _softlight(a: number, b: number): number {
  let d = 1;
  let e = a;

  if (b > 0.5) {
    e = 1;
    d = (a > 0.25) ?
      Math.sqrt(a) :
      ((16 * a - 12) * a + 4) * a;
  }
  return a - ((1 - 2 * b) * e * (d - a));
}

function _hardlight(a: number, b: number): number {
  return _overlay(b, a);
}

function _difference(a: number, b: number): number {
  return Math.abs(a - b);
}

function _exclusion(a: number, b: number): number {
  return a + b - (2 * a * b);
}

function _average(a: number, b: number): number {
  return (a + b) / 2;
}

function _negation(a: number, b: number): number {
  return 1 - Math.abs(a + b - 1);
}

export function blendMultiply(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _multiply);
}

export function blendScreen(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _screen);
}

export function blendOverlay(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _overlay);
}

export function blendSoftlight(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _softlight);
}

export function blendHardlight(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _hardlight);
}

export function blendDifference(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _difference);
}

export function blendExclusion(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _exclusion);
}

export function blendAverage(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _average);
}

export function blendNegation(a: RgbColor, b: RgbColor): RgbColor {
  return blend(a, b, _negation);
}

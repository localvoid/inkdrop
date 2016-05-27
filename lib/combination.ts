import {HslColor, HsvColor} from "./color";

export function complement(hsl: HslColor): HslColor {
  return new HslColor((hsl.h + 0.5) % 1, hsl.s, hsl.l, hsl.a);
}

export function triad(hsl: HslColor): [HslColor, HslColor, HslColor] {
  return [
    hsl,
    new HslColor((hsl.h + (120 / 360)) % 1, hsl.s, hsl.l, hsl.a),
    new HslColor((hsl.h + (240 / 360)) % 1, hsl.s, hsl.l, hsl.a),
  ];
}

export function tetrad(hsl: HslColor): [HslColor, HslColor, HslColor, HslColor] {
  return [
    hsl,
    new HslColor((hsl.h + 0.25) % 1, hsl.s, hsl.l, hsl.a),
    new HslColor((hsl.h + 0.5) % 1, hsl.s, hsl.l, hsl.a),
    new HslColor((hsl.h + 0.75) % 1, hsl.s, hsl.l, hsl.a),
  ];
}

export function splitComplement(hsl: HslColor): [HslColor, HslColor, HslColor] {
  return [
    hsl,
    new HslColor((hsl.h + 0.2) % 1, hsl.s, hsl.l, hsl.a),
    new HslColor((hsl.h + 0.6) % 1, hsl.s, hsl.l, hsl.a),
  ];
}

export function analogous(hsl: HslColor, results = 6, slices = 30): HslColor[] {
  const part = 1 / slices;
  const result = [] as HslColor[];

  let h = (hsl.h - (part * (results >> 1))) % 1;
  while (results--) {
    result.push(new HslColor(h, hsl.s, hsl.l, hsl.a));
    h = (h + part) % 1;
  }

  return result;
}

export function monochromatic(hsv: HsvColor, results = 6): HsvColor[] {
  const result = [] as HsvColor[];
  const modification = 1 / results;

  let v = hsv.v;
  while (results--) {
    result.push(new HsvColor(hsv.h, hsv.s, v, hsv.a));
    v = (v + modification) % 1;
  }

  return result;
}

import {HslColor, HsvColor} from "./color";

export function complement(hsl: HslColor): HslColor {
  return new HslColor((((hsl.h * 360) + 180) % 360) / 360, hsl.s, hsl.l, hsl.a);
}

export function triad(hsl: HslColor): [HslColor, HslColor, HslColor] {
  const h = hsl.h * 360;

  return [
    hsl,
    new HslColor(((h + 120) % 360) / 360, hsl.s, hsl.l, hsl.a),
    new HslColor(((h + 240) % 360) / 360, hsl.s, hsl.l, hsl.a),
  ];
}

export function tetrad(hsl: HslColor): [HslColor, HslColor, HslColor, HslColor] {
  const h = hsl.h * 360;

  return [
    hsl,
    new HslColor(((h + 90) % 360) / 360, hsl.s, hsl.l, hsl.a),
    new HslColor(((h + 180) % 360) / 360, hsl.s, hsl.l, hsl.a),
    new HslColor(((h + 270) % 360) / 360, hsl.s, hsl.l, hsl.a),
  ];
}

export function splitComplement(hsl: HslColor): [HslColor, HslColor, HslColor] {
  const h = hsl.h * 360;

  return [
    hsl,
    new HslColor(((h + 72) % 360) / 360, hsl.s, hsl.l, hsl.a),
    new HslColor(((h + 216) % 360) / 360, hsl.s, hsl.l, hsl.a),
  ];
}

export function analogous(hsl: HslColor, results = 6, slices = 30): HslColor[] {
  const part = 360 / slices;
  const result = [] as HslColor[];
  result.push(hsl);

  let h = hsl.h * 360;
  for (h = ((h - (part * results >> 1)) + 720) % 360; --results; ) {
    h = (hsl.h + part) % 360;
    result.push(new HslColor(h / 360, hsl.s, hsl.l, hsl.a));
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

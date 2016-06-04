import {RgbColor, LabColor} from "./color";

export function clamp01(v: number): number {
  if (v <= 0) {
    return 0;
  }
  if (v >= 1) {
    return 1;
  }
  return v;
}

/**
 * Luminance.
 *
 * http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
 *
 * @param rgb RGB color
 * @returns luminance with a range: [0, 1]
 */
export function luminance(rgb: RgbColor): number {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
  g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
  b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);

  return ((0.2126 * r) + (0.7152 * g) + (0.0722 * b)) * rgb.alpha;
}

/**
 * Contrast ratio.
 *
 * http://www.w3.org/TR/WCAG20/#contrast-ratiodef
 *
 * @param a RGB color
 * @param b RGB color
 * @returns contrast ratio with a range: [0, 1]
 */
export function contrast(a: RgbColor, b: RgbColor): number {
  const l1 = luminance(a);
  const l2 = luminance(b);
  return (l1 > l2) ?
    (l1 + 0.05) / (l2 + 0.05) :
    (l2 + 0.05) / (l1 + 0.05);
}

/**
 * Contrast level: "AA", "AAA"
 *
 * @param contrastRatio
 * @returns contrast level with a range: [0, 2]. 2 = "AAA", 1 = "AA"
 */
export function contrastLevel(contrastRatio: number): number {
  if (contrastRatio >= 7.1) {
    return 2;
  }
  if (contrastRatio >= 4.5) {
    return 1;
  }
  return 0;
}

/**
 * Find best contrast color.
 *
 * @param a
 * @param bs
 * @returns RGB color
 */
export function findBestContrast(a: RgbColor, bs: RgbColor[]): RgbColor | undefined {
  let bestColor: RgbColor | undefined;
  let bestContrast = 0;

  for (let i = 0; i < bs.length; i++) {
    const b = bs[i];
    const c = contrast(a, b);
    if (c > bestContrast) {
      bestContrast = c;
      bestColor = b;
    }
  }

  return bestColor;
}

/**
 * Brightness.
 *
 * http://www.w3.org/TR/AERT#color-contrast
 *
 * @param rgb RGB color
 * @return brightness with a range: [0, 1]
 */
export function brightness(rgb: RgbColor): number {
  return ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) * 0.001;
}

/**
 * @param rgb RGB color
 * @returns true if color is dark
 */
export function isDark(rgb: RgbColor): boolean {
  return brightness(rgb) < 0.5;
}

/**
 * @param rgb RGB color
 * @eturns true if color is light.
 */
export function isLight(rgb: RgbColor): boolean {
  return brightness(rgb) >= 0.5;
}

export function labDistanceCIE76(a: LabColor, b: LabColor): number {
  return Math.sqrt(((a.l - b.l) ** 2) + ((a.a - b.a) ** 2) + ((a.b - b.b) ** 2));
}

export function labDistanceCIE94(cl: LabColor, cr: LabColor): number {
  const kl = 1;
  const k1 = 0.045;
  const k2 = 0.015;

  const deltaL = cl.l - cr.l;
  const c1 = Math.sqrt(((cl.a) ** 2) + ((cl.b) ** 2));
  const c2 = Math.sqrt(((cr.a) ** 2) + ((cr.b) ** 2));
  const deltaCab = c1 - c2;
  const deltaHab = Math.sqrt(((cl.a - cr.a) ** 2) + ((cl.b - cr.b) ** 2) - (deltaCab ** 2));
  const sl = 1;
  const sc = 1 + k1 * c1;
  const sh = 1 + k2 * c1;

  return Math.sqrt(((deltaL / (kl * sl)) ** 2) + ((deltaCab / sc) ** 2) + ((deltaHab / sh) ** 2));
}

export function clampRgb(rgb: RgbColor): RgbColor {
  return new RgbColor(
    clamp01(rgb.r),
    clamp01(rgb.g),
    clamp01(rgb.b),
    clamp01(rgb.alpha));
}

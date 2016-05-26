import {RgbColor} from "./color";

// http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
export function luminance(rgb: RgbColor): number {
  const rsRgb = rgb.r / 255;
  const gsRgb = rgb.g / 255;
  const bsRgb = rgb.b / 255;

  const r = (rsRgb <= 0.03928) ? rsRgb / 12.92 : Math.pow(((rsRgb + 0.055) / 1.055), 2.4);
  const g = (gsRgb <= 0.03928) ? gsRgb / 12.92 : Math.pow(((gsRgb + 0.055) / 1.055), 2.4);
  const b = (bsRgb <= 0.03928) ? bsRgb / 12.92 : Math.pow(((bsRgb + 0.055) / 1.055), 2.4);

  return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

// http://www.w3.org/TR/AERT#color-contrast
export function brightness(rgb: RgbColor): number {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

export function isDark(rgb: RgbColor): boolean {
  return brightness(rgb) < 128;
}

export function isLight(rgb: RgbColor): boolean {
  return brightness(rgb) >= 128;
}

import {RgbColor} from "./color";

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

  return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
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

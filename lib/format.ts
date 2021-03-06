import {RgbColor, HslColor, HsvColor} from "./color";

/**
 * Convert RGB color to HEX formatted string.
 *
 * @param rgb RGB color
 * @returns string in format `#RRGGBB` or `#RGB`
 */
export function formatRgbToHex(rgb: RgbColor): string {
  const r = Math.round(rgb.r * 255);
  const g = Math.round(rgb.g * 255);
  const b = Math.round(rgb.b * 255);

  if (((r >> 4) === (r & 0xf)) &&
      ((g >> 4) === (g & 0xf)) &&
      ((b >> 4) === (b & 0xf))) {
    return "#" + ((((r & 0xf) << 8) + ((g & 0xf) << 4) + (b & 0xf)) | (1 << 12)).toString(16).substring(1);
  }

  return "#" + (((r << 16) + (g << 8) + b) | (1 << 24)).toString(16).substring(1);
}

/**
 * Convert RGB color to formatted string.
 *
 * @param rgb RGB color
 * @returns string in format `rgb(r,g,b)` or `hsva(r,g,b,a)`
 */
export function formatRgbToString(rgb: RgbColor): string {
  const r = Math.round(rgb.r * 255);
  const g = Math.round(rgb.g * 255);
  const b = Math.round(rgb.b * 255);

  return (rgb.alpha === 1) ?
    `rgb(${r},${g},${b})` :
    `rgba(${r},${g},${b},${Math.round(rgb.alpha * 1000) / 1000})`;
}

/**
 * Convert HSL color to formatted string.
 *
 * @param hsl HSL color
 * @returns string in format `hsl(h,s%,v%)` or `hsla(h,s%,v%,a)`
 */
export function formatHslToString(hsl: HslColor): string {
  const h = Math.round(hsl.h * 360);
  const s = Math.round(hsl.s * 100);
  const l = Math.round(hsl.l * 100);

  return (hsl.alpha === 1) ?
    `hsl(${h},${s}%,${l}%)` :
    `hsla(${h},${s}%,${l}%,${Math.round(hsl.alpha * 1000) / 1000})`;
}

/**
 * Convert HSV color to formatted string.
 *
 * @param hsv HSV color
 * @returns string in format `hsv(h,s%,v%)` or `hsva(h,s%,v%,a)`
 */
export function formatHsvToString(hsv: HsvColor): string {
  const h = Math.round(hsv.h * 360);
  const s = Math.round(hsv.s * 100);
  const v = Math.round(hsv.v * 100);

  return (hsv.alpha === 1) ?
    `hsv(${h},${s}%,${v}%)` :
    `hsva(${h},${s}%,${v}%,${Math.round(hsv.alpha * 1000) / 1000})`;
}

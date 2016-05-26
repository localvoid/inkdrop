import {RgbColor, HsvColor} from "./color";
import {rgbToHex} from "./convert";

function zeroPad(s: string): string {
  return s.length === 1 ? "0" + s : s;
}

export function formatRgbToHexMin(rgb: RgbColor): string {
  const r = Math.round(rgb.r * 255);
  const g = Math.round(rgb.g * 255);
  const b = Math.round(rgb.b * 255);

  if (((r >> 4) === (r & 0xf)) &&
      ((g >> 4) === (g & 0xf)) &&
      ((b >> 4) === (b & 0xf))) {
    return (((r << 8) + (g << 4) + b) | (1 << 12)).toString(16).substring(1);
  }

  return (((r << 16) + (g << 8) + b) | (1 << 24)).toString(16).substring(1);
}

export function formatRgbToHex8(rgb: RgbColor): string {
  return rgbToHex(rgb) + zeroPad(Math.round(rgb.a * 255).toString(16));
}

export function formatHsvToString(hsv: HsvColor): string {
  const h = Math.round(hsv.h * 360);
  const s = Math.round(hsv.s * 100);
  const v = Math.round(hsv.v * 100);

  return (hsv.a === 1) ?
    `hsv(${h},${s}%,${v}%)` :
    `hsva(${h},${s}%,${v}%,${hsv.a})`;
}

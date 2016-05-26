import {RgbColor, HsvColor} from "./color";

function zeroPad(s: string): string {
  return s.length === 1 ? "0" + s : s;
}

export function rgbToHex(rgb: RgbColor): string {
  return zeroPad(Math.round(rgb.r * 255).toString(16)) +
    zeroPad(Math.round(rgb.g * 255).toString(16)) +
    zeroPad(Math.round(rgb.b * 255).toString(16));
}

export function rgbToHexMin(rgb: RgbColor): string {
  const r = Math.round(rgb.r * 255);
  const g = Math.round(rgb.g * 255);
  const b = Math.round(rgb.b * 255);

  if ((r >> 4) === (r & 15) && (g >> 4) === (g & 15) && (b >> 4) === (b & 15)) {
    return r.toString(16) + g.toString(16) + b.toString(16);
  }

  return zeroPad(r.toString(16)) + zeroPad(g.toString(16)) + zeroPad(b.toString(16));
}

export function rgbToHex8(rgb: RgbColor): string {
  return zeroPad(Math.round(rgb.r * 255).toString(16)) +
    zeroPad(Math.round(rgb.g * 255).toString(16)) +
    zeroPad(Math.round(rgb.b * 255).toString(16)) +
    zeroPad(Math.round(rgb.a * 255).toString(16));
}

export function hsvToString(hsv: HsvColor): string {
  const h = Math.round(hsv.h * 360);
  const s = Math.round(hsv.s * 100);
  const v = Math.round(hsv.v * 100);

  return (hsv.a === 1) ?
    `hsv(${h},${s}%,${v}%)` :
    `hsva(${h},${s}%,${v}%,${hsv.a})`;
}

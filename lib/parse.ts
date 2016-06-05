import {RgbColor} from "./color";

export function parseHex(hex: string): RgbColor {
  return new RgbColor(
    Number.parseInt(hex.substr(0, 2), 16) / 255,
    Number.parseInt(hex.substr(2, 2), 16) / 255,
    Number.parseInt(hex.substr(4, 2), 16) / 255);
}

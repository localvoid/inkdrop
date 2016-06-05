import {LchColor} from "./color";

export function randomWarmColor(): LchColor {
  return new LchColor(
     0.2 + Math.random() * 0.3,
     0.1 + Math.random() * 0.3,
     Math.random());
}

export function randomHappyColor(): LchColor {
  return new LchColor(
    0.5 + Math.random() * 0.3,
    0.5 + Math.random() * 0.3,
    Math.random());
}

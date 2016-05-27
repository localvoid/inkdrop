import {RgbColor, HslColor, HsvColor} from "../lib/color";
import {formatRgbToHex, formatRgbToString, formatHslToString, formatHsvToString} from "../lib/format";

describe("format", () => {
  describe("rgb to hex", () => {
    it("should format rgb[5, 5, 5] as '#050505'", () => {
      expect(formatRgbToHex(new RgbColor(5 / 255, 5 / 255, 5 / 255))).toBe("#050505");
    });

    it("should format rgb[0, 0, 0] as '#000'", () => {
      expect(formatRgbToHex(new RgbColor(0, 0, 0))).toBe("#000");
    });

    it("should format rgb[16, 16, 16] as '#101010'", () => {
      expect(formatRgbToHex(new RgbColor(16 / 255, 16 / 255, 16 / 255))).toBe("#101010");
    });

    it("should format rgb[17, 17, 17] as '#111'", () => {
      expect(formatRgbToHex(new RgbColor(17 / 255, 17 / 255, 17 / 255))).toBe("#111");
    });
  });

  describe("rgb to string", () => {
    it("should format rgb[5, 5, 5] as 'rgb(5,5,5)'", () => {
      expect(formatRgbToString(new RgbColor(5 / 255, 5 / 255, 5 / 255))).toBe("rgb(5,5,5)");
    });

    it("should format rgb[5, 5, 5, 0.5] as 'rgba(5,5,5,0.5)'", () => {
      expect(formatRgbToString(new RgbColor(5 / 255, 5 / 255, 5 / 255, 0.5))).toBe("rgba(5,5,5,0.5)");
    });
  });

  describe("hsl to string", () => {
    it("should format hsl[128, 10, 10] as 'hsl(128,10%,10%)'", () => {
      expect(formatHslToString(new HslColor(128 / 360, 0.1, 0.1))).toBe("hsl(128,10%,10%)");
    });

    it("should format hsv[128, 10, 10, 0.5] as 'hsla(128,10%,10%,0.5)'", () => {
      expect(formatHslToString(new HslColor(128 / 360, 0.1, 0.1, 0.5))).toBe("hsla(128,10%,10%,0.5)");
    });
  });

  describe("hsv to string", () => {
    it("should format hsv[128, 10, 10] as 'hsv(128,10%,10%)'", () => {
      expect(formatHsvToString(new HsvColor(128 / 360, 0.1, 0.1))).toBe("hsv(128,10%,10%)");
    });

    it("should format hsv[128, 10, 10, 0.5] as 'hsva(128,10%,10%,0.5)'", () => {
      expect(formatHsvToString(new HsvColor(128 / 360, 0.1, 0.1, 0.5))).toBe("hsva(128,10%,10%,0.5)");
    });
  });
});

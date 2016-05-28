import {RgbColor, HslColor} from "../lib/color";
import {desaturate, saturate, greyscaleHsl, lighten, darken, brighten, spin, mixColors} from "../lib/transform";

describe("transform", () => {
  describe("desaturate", () => {
    it("should desaturate hsl[180, 50, 50] by 0.2", () => {
      const hsl = desaturate(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBeCloseTo(0.3, 2);
      expect(hsl.l).toBe(0.5);
    });

    it("should desaturate hsl[180, 50, 50] by 0.6", () => {
      const hsl = desaturate(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0);
      expect(hsl.l).toBe(0.5);
    });

    it("should desaturate hsl[180, 50, 50] by -0.6", () => {
      const hsl = desaturate(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(1);
      expect(hsl.l).toBe(0.5);
    });

    it("should have default desaturation value 0.1", () => {
      const hsl = desaturate(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBeCloseTo(0.4, 2);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("saturate", () => {
    it("should saturate hsl[180, 50, 50] by 0.2", () => {
      const hsl = saturate(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBeCloseTo(0.7, 2);
      expect(hsl.l).toBe(0.5);
    });

    it("should saturate hsl[180, 50, 50] by 0.6", () => {
      const hsl = saturate(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(1);
      expect(hsl.l).toBe(0.5);
    });

    it("should saturate hsl[180, 50, 50] by -0.6", () => {
      const hsl = saturate(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0);
      expect(hsl.l).toBe(0.5);
    });

    it("should have default saturation value 0.1", () => {
      const hsl = saturate(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBeCloseTo(0.6, 2);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("greyscale", () => {
    it("should make hsl[180, 50, 50] greyscale", () => {
      const hsl = greyscaleHsl(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(1);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("lighten", () => {
    it("should lighten hsl[180, 50, 50] by 0.2", () => {
      const hsl = lighten(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBeCloseTo(0.7, 2);
    });

    it("should lighten hsl[180, 50, 50] by 0.6", () => {
      const hsl = lighten(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(1);
    });

    it("should lighten hsl[180, 50, 50] by -0.6", () => {
      const hsl = lighten(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0);
    });

    it("should have default lighten value 0.1", () => {
      const hsl = lighten(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBeCloseTo(0.6, 2);
    });
  });

  describe("darken", () => {
    it("should darken hsl[180, 50, 50] by 0.2", () => {
      const hsl = darken(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBeCloseTo(0.3, 2);
    });

    it("should darken hsl[180, 50, 50] by 0.6", () => {
      const hsl = darken(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0);
    });

    it("should darken hsl[180, 50, 50] by -0.6", () => {
      const hsl = darken(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(1);
    });

    it("should have default darken value 0.1", () => {
      const hsl = darken(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBeCloseTo(0.4, 2);
    });
  });

  describe("spin", () => {
    it("should spin hsl[180, 50, 50] by 360", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), 1);
      expect(hsl.h).toBeCloseTo(0.5, 2);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
    });

    it("should spin hsl[180, 50, 50] by 180", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), 180 / 360);
      expect(hsl.h).toBeCloseTo(0, 2);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
    });

    it("should spin hsl[180, 50, 50] by 90", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), 90 / 360);
      expect(Math.round(hsl.h * 360)).toBe(270);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
    });

    it("should spin hsl[180, 50, 50] by -180", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), -180 / 360);
      expect(hsl.h).toBeCloseTo(0, 2);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
    });

    it("should spin hsl[180, 50, 50] by -90", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), -90 / 360);
      expect(Math.round(hsl.h * 360)).toBe(90);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("brighten", () => {
    it("should brighten rgb[128, 128, 128] by 0.2", () => {
      const rgb = brighten(new RgbColor(0.5, 0.5, 0.5), 0.2);
      expect(rgb.r).toBeCloseTo(0.7, 2);
      expect(rgb.g).toBeCloseTo(0.7, 2);
      expect(rgb.b).toBeCloseTo(0.7, 2);
    });

    it("should brighten rgb[128, 128, 128] by 0.6", () => {
      const rgb = brighten(new RgbColor(0.5, 0.5, 0.5), 0.6);
      expect(rgb.r).toBe(1);
      expect(rgb.g).toBe(1);
      expect(rgb.b).toBe(1);
    });

    it("should brighten rgb[128, 128, 128] by -0.6", () => {
      const rgb = brighten(new RgbColor(0.5, 0.5, 0.5), -0.6);
      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    });

    it("should have default brighten value 0.1", () => {
      const rgb = brighten(new RgbColor(0.5, 0.5, 0.5));
      expect(rgb.r).toBeCloseTo(0.6, 2);
      expect(rgb.g).toBeCloseTo(0.6, 2);
      expect(rgb.b).toBeCloseTo(0.6, 2);
    });
  });

  describe("mixColors", () => {
    it("should mix rgb[64, 64, 64] and rgb[128, 128, 128] and get rgb[96, 96, 96]", () => {
      const a = new RgbColor(0.25, 0.25, 0.25);
      const b = new RgbColor(0.5, 0.5, 0.5);
      const rgb = mixColors(a, b);

      expect(Math.round(rgb.r * 255)).toBe(96);
      expect(Math.round(rgb.g * 255)).toBe(96);
      expect(Math.round(rgb.b * 255)).toBe(96);
      expect(rgb.a).toBe(1);
    });

    it("should mix rgb[64, 64, 64, 0.5] and rgb[128, 128, 128] and get rgb[80, 80, 80, 0.75]", () => {
      const a = new RgbColor(0.25, 0.25, 0.25, 0.5);
      const b = new RgbColor(0.5, 0.5, 0.5);
      const rgb = mixColors(a, b);

      expect(Math.round(rgb.r * 255)).toBe(80);
      expect(Math.round(rgb.g * 255)).toBe(80);
      expect(Math.round(rgb.b * 255)).toBe(80);
      expect(rgb.a).toBeCloseTo(0.75, 2);
    });
  });
});

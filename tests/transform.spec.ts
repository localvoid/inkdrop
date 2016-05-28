import {RgbColor, HslColor, HwbColor} from "../lib/color";
import {absDesaturate, absSaturate, absLighten, absDarken, absFadeIn, absFadeOut, absWhiten, absBlacken, absBrighten,
  relDesaturate, relSaturate, relLighten, relDarken, relFadeIn, relFadeOut, relWhiten, relBlacken, relBrighten,
  spin, mixColors, tint, shade, negate, greyscaleHsl, greyscaleRgb} from "../lib/transform";

describe("transform", () => {
  describe("absDesaturate", () => {
    it("should desaturate hsl[180, 50, 50] by 0.2", () => {
      const hsl = absDesaturate(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(30);
      expect(hsl.l).toBe(0.5);
    });

    it("should desaturate hsl[180, 50, 50] by 0.6", () => {
      const hsl = absDesaturate(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0);
      expect(hsl.l).toBe(0.5);
    });

    it("should desaturate hsl[180, 50, 50] by -0.6", () => {
      const hsl = absDesaturate(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(1);
      expect(hsl.l).toBe(0.5);
    });

    it("should have default desaturation value 0.1", () => {
      const hsl = absDesaturate(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(40);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("absSaturate", () => {
    it("should saturate hsl[180, 50, 50] by 0.2", () => {
      const hsl = absSaturate(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(70);
      expect(hsl.l).toBe(0.5);
    });

    it("should saturate hsl[180, 50, 50] by 0.6", () => {
      const hsl = absSaturate(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(1);
      expect(hsl.l).toBe(0.5);
    });

    it("should saturate hsl[180, 50, 50] by -0.6", () => {
      const hsl = absSaturate(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0);
      expect(hsl.l).toBe(0.5);
    });

    it("should have default saturation value 0.1", () => {
      const hsl = absSaturate(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(60);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("absLighten", () => {
    it("should lighten hsl[180, 50, 50] by 0.2", () => {
      const hsl = absLighten(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(70);
    });

    it("should lighten hsl[180, 50, 50] by 0.6", () => {
      const hsl = absLighten(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(1);
    });

    it("should lighten hsl[180, 50, 50] by -0.6", () => {
      const hsl = absLighten(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0);
    });

    it("should have default lighten value 0.1", () => {
      const hsl = absLighten(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(60);
    });
  });

  describe("absDarken", () => {
    it("should darken hsl[180, 50, 50] by 0.2", () => {
      const hsl = absDarken(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(30);
    });

    it("should darken hsl[180, 50, 50] by 0.6", () => {
      const hsl = absDarken(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0);
    });

    it("should darken hsl[180, 50, 50] by -0.6", () => {
      const hsl = absDarken(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(1);
    });

    it("should have default darken value 0.1", () => {
      const hsl = absDarken(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(40);
    });
  });

  describe("absFadeIn", () => {
    it("should fadeIn hsl[180, 50, 50, 0.5] by 0.2", () => {
      const hsl = absFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(70);
    });

    it("should fadeIn hsl[180, 50, 50, 0.5] by 0.6", () => {
      const hsl = absFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(hsl.a).toBe(1);
    });

    it("should fadeIn hsl[180, 50, 50, 0.5] by -0.6", () => {
      const hsl = absFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(hsl.a).toBe(0);
    });

    it("should have default fadeIn value 0.1", () => {
      const hsl = absFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(60);
    });
  });

  describe("absFadeOut", () => {
    it("should fadeOut hsl[180, 50, 50, 0.5] by 0.2", () => {
      const hsl = absFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(30);
    });

    it("should fadeOut hsl[180, 50, 50, 0.5] by 0.6", () => {
      const hsl = absFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(hsl.a).toBe(0);
    });

    it("should fadeOut hsl[180, 50, 50, 0.5] by -0.6", () => {
      const hsl = absFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(hsl.a).toBe(1);
    });

    it("should have default fadeOut value 0.1", () => {
      const hsl = absFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(40);
    });
  });

  describe("absWhiten", () => {
    it("should whiten hwb[180, 50, 50] by 0.2", () => {
      const hwb = absWhiten(new HwbColor(0.5, 0.5, 0.5), 0.2);
      expect(hwb.h).toBe(0.5);
      expect(Math.round(hwb.w * 100)).toBe(70);
      expect(hwb.b).toBe(0.5);
    });

    it("should whiten hwb[180, 50, 50] by 0.6", () => {
      const hwb = absWhiten(new HwbColor(0.5, 0.5, 0.5), 0.6);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(1);
      expect(hwb.b).toBe(0.5);
    });

    it("should whiten hwb[180, 50, 50] by -0.6", () => {
      const hwb = absWhiten(new HwbColor(0.5, 0.5, 0.5), -0.6);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0);
      expect(hwb.b).toBe(0.5);
    });

    it("should have default whiten value 0.1", () => {
      const hwb = absWhiten(new HwbColor(0.5, 0.5, 0.5));
      expect(hwb.h).toBe(0.5);
      expect(Math.round(hwb.w * 100)).toBe(60);
      expect(hwb.b).toBe(0.5);
    });
  });

  describe("absBlacken", () => {
    it("should blacken hwb[180, 50, 50] by 0.2", () => {
      const hwb = absBlacken(new HwbColor(0.5, 0.5, 0.5), 0.2);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(Math.round(hwb.b * 100)).toBe(70);
    });

    it("should blacken hwb[180, 50, 50] by 0.6", () => {
      const hwb = absBlacken(new HwbColor(0.5, 0.5, 0.5), 0.6);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(hwb.b).toBe(1);
    });

    it("should blacken hwb[180, 50, 50] by -0.6", () => {
      const hwb = absBlacken(new HwbColor(0.5, 0.5, 0.5), -0.6);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(hwb.b).toBe(0);
    });

    it("should have default blacken value 0.1", () => {
      const hwb = absBlacken(new HwbColor(0.5, 0.5, 0.5));
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(Math.round(hwb.b * 100)).toBe(60);
    });
  });

  describe("absBrighten", () => {
    it("should brighten rgb[128, 128, 128] by 0.2", () => {
      const rgb = absBrighten(new RgbColor(0.5, 0.5, 0.5), 0.2);
      expect(Math.round(rgb.r * 255)).toBe(179);
      expect(Math.round(rgb.g * 255)).toBe(179);
      expect(Math.round(rgb.b * 255)).toBe(179);
    });

    it("should brighten rgb[128, 128, 128] by 0.6", () => {
      const rgb = absBrighten(new RgbColor(0.5, 0.5, 0.5), 0.6);
      expect(Math.round(rgb.r * 255)).toBe(255);
      expect(Math.round(rgb.g * 255)).toBe(255);
      expect(Math.round(rgb.b * 255)).toBe(255);
    });

    it("should brighten rgb[128, 128, 128] by -0.6", () => {
      const rgb = absBrighten(new RgbColor(0.5, 0.5, 0.5), -0.6);
      expect(Math.round(rgb.r * 255)).toBe(0);
      expect(Math.round(rgb.g * 255)).toBe(0);
      expect(Math.round(rgb.b * 255)).toBe(0);
    });

    it("should have default brighten value 0.1", () => {
      const rgb = absBrighten(new RgbColor(0.5, 0.5, 0.5));
      expect(Math.round(rgb.r * 255)).toBe(153);
      expect(Math.round(rgb.g * 255)).toBe(153);
      expect(Math.round(rgb.b * 255)).toBe(153);
    });
  });

  describe("relDesaturate", () => {
    it("should desaturate hsl[180, 50, 50] by 0.2", () => {
      const hsl = relDesaturate(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(40);
      expect(hsl.l).toBe(0.5);
    });

    it("should desaturate hsl[180, 50, 50] by 0.6", () => {
      const hsl = relDesaturate(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(20);
      expect(hsl.l).toBe(0.5);
    });

    it("should desaturate hsl[180, 50, 50] by -0.6", () => {
      const hsl = relDesaturate(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(80);
      expect(hsl.l).toBe(0.5);
    });

    it("should have default desaturation value 0.1", () => {
      const hsl = relDesaturate(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(45);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("relSaturate", () => {
    it("should saturate hsl[180, 50, 50] by 0.2", () => {
      const hsl = relSaturate(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(60);
      expect(hsl.l).toBe(0.5);
    });

    it("should saturate hsl[180, 50, 50] by 0.6", () => {
      const hsl = relSaturate(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(80);
      expect(hsl.l).toBe(0.5);
    });

    it("should saturate hsl[180, 50, 50] by -0.6", () => {
      const hsl = relSaturate(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(20);
      expect(hsl.l).toBe(0.5);
    });

    it("should have default saturation value 0.1", () => {
      const hsl = relSaturate(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(Math.round(hsl.s * 100)).toBe(55);
      expect(hsl.l).toBe(0.5);
    });
  });

  describe("relLighten", () => {
    it("should lighten hsl[180, 50, 50] by 0.2", () => {
      const hsl = relLighten(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(60);
    });

    it("should lighten hsl[180, 50, 50] by 0.6", () => {
      const hsl = relLighten(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(80);
    });

    it("should lighten hsl[180, 50, 50] by -0.6", () => {
      const hsl = relLighten(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(20);
    });

    it("should have default lighten value 0.1", () => {
      const hsl = relLighten(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(55);
    });
  });

  describe("relDarken", () => {
    it("should darken hsl[180, 50, 50] by 0.2", () => {
      const hsl = relDarken(new HslColor(0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(40);
    });

    it("should darken hsl[180, 50, 50] by 0.6", () => {
      const hsl = relDarken(new HslColor(0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(20);
    });

    it("should darken hsl[180, 50, 50] by -0.6", () => {
      const hsl = relDarken(new HslColor(0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(80);
    });

    it("should have default darken value 0.1", () => {
      const hsl = relDarken(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(Math.round(hsl.l * 100)).toBe(45);
    });
  });

  describe("relFadeIn", () => {
    it("should fadeIn hsl[180, 50, 50, 0.5] by 0.2", () => {
      const hsl = relFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(60);
    });

    it("should fadeIn hsl[180, 50, 50, 0.5] by 0.6", () => {
      const hsl = relFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(80);
    });

    it("should fadeIn hsl[180, 50, 50, 0.5] by -0.6", () => {
      const hsl = relFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(20);
    });

    it("should have default fadeIn value 0.1", () => {
      const hsl = relFadeIn(new HslColor(0.5, 0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(55);
    });
  });

  describe("relFadeOut", () => {
    it("should fadeOut hsl[180, 50, 50, 0.5] by 0.2", () => {
      const hsl = relFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5), 0.2);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(40);
    });

    it("should fadeOut hsl[180, 50, 50, 0.5] by 0.6", () => {
      const hsl = relFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5), 0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(20);
    });

    it("should fadeOut hsl[180, 50, 50, 0.5] by -0.6", () => {
      const hsl = relFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5), -0.6);
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(80);
    });

    it("should have default fadeOut value 0.1", () => {
      const hsl = relFadeOut(new HslColor(0.5, 0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
      expect(Math.round(hsl.a * 100)).toBe(45);
    });
  });

  describe("relWhiten", () => {
    it("should whiten hwb[180, 50, 50] by 0.2", () => {
      const hwb = relWhiten(new HwbColor(0.5, 0.5, 0.5), 0.2);
      expect(hwb.h).toBe(0.5);
      expect(Math.round(hwb.w * 100)).toBe(60);
      expect(hwb.b).toBe(0.5);
    });

    it("should whiten hwb[180, 50, 50] by 0.6", () => {
      const hwb = relWhiten(new HwbColor(0.5, 0.5, 0.5), 0.6);
      expect(hwb.h).toBe(0.5);
      expect(Math.round(hwb.w * 100)).toBe(80);
      expect(hwb.b).toBe(0.5);
    });

    it("should whiten hwb[180, 50, 50] by -0.6", () => {
      const hwb = relWhiten(new HwbColor(0.5, 0.5, 0.5), -0.6);
      expect(hwb.h).toBe(0.5);
      expect(Math.round(hwb.w * 100)).toBe(20);
      expect(hwb.b).toBe(0.5);
    });

    it("should have default whiten value 0.1", () => {
      const hwb = relWhiten(new HwbColor(0.5, 0.5, 0.5));
      expect(hwb.h).toBe(0.5);
      expect(Math.round(hwb.w * 100)).toBe(55);
      expect(hwb.b).toBe(0.5);
    });
  });

  describe("relBlacken", () => {
    it("should blacken hwb[180, 50, 50] by 0.2", () => {
      const hwb = relBlacken(new HwbColor(0.5, 0.5, 0.5), 0.2);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(Math.round(hwb.b * 100)).toBe(60);
    });

    it("should blacken hwb[180, 50, 50] by 0.6", () => {
      const hwb = relBlacken(new HwbColor(0.5, 0.5, 0.5), 0.6);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(Math.round(hwb.b * 100)).toBe(80);
    });

    it("should blacken hwb[180, 50, 50] by -0.6", () => {
      const hwb = relBlacken(new HwbColor(0.5, 0.5, 0.5), -0.6);
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(Math.round(hwb.b * 100)).toBe(20);
    });

    it("should have default blacken value 0.1", () => {
      const hwb = relBlacken(new HwbColor(0.5, 0.5, 0.5));
      expect(hwb.h).toBe(0.5);
      expect(hwb.w).toBe(0.5);
      expect(Math.round(hwb.b * 100)).toBe(55);
    });
  });

  describe("relBrighten", () => {
    it("should brighten rgb[128, 128, 128] by 0.2", () => {
      const rgb = relBrighten(new RgbColor(0.5, 0.5, 0.5), 0.2);
      expect(Math.round(rgb.r * 255)).toBe(153);
      expect(Math.round(rgb.g * 255)).toBe(153);
      expect(Math.round(rgb.b * 255)).toBe(153);
    });

    it("should brighten rgb[128, 128, 128] by 0.6", () => {
      const rgb = relBrighten(new RgbColor(0.5, 0.5, 0.5), 0.6);
      expect(Math.round(rgb.r * 255)).toBe(204);
      expect(Math.round(rgb.g * 255)).toBe(204);
      expect(Math.round(rgb.b * 255)).toBe(204);
    });

    it("should brighten rgb[128, 128, 128] by -0.6", () => {
      const rgb = relBrighten(new RgbColor(0.5, 0.5, 0.5), -0.6);
      expect(Math.round(rgb.r * 255)).toBe(51);
      expect(Math.round(rgb.g * 255)).toBe(51);
      expect(Math.round(rgb.b * 255)).toBe(51);
    });

    it("should have default brighten value 0.1", () => {
      const rgb = relBrighten(new RgbColor(0.5, 0.5, 0.5));
      expect(Math.round(rgb.r * 255)).toBe(140);
      expect(Math.round(rgb.g * 255)).toBe(140);
      expect(Math.round(rgb.b * 255)).toBe(140);
    });
  });

  describe("spin", () => {
    it("should spin hsl[180, 50, 50] by 360", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), 1);
      expect(Math.round(hsl.h * 360)).toBe(180);
      expect(hsl.s).toBe(0.5);
      expect(hsl.l).toBe(0.5);
    });

    it("should spin hsl[180, 50, 50] by 180", () => {
      const hsl = spin(new HslColor(0.5, 0.5, 0.5), 180 / 360);
      expect(Math.round(hsl.h * 360)).toBe(0);
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
      expect(Math.round(hsl.h * 360)).toBe(0);
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
      expect(Math.round(rgb.a * 100)).toBe(75);
    });
  });

  describe("tint", () => {
    it("rgb[200, 100, 55] should be tinted", () => {
      const rgb = tint(new RgbColor(200 / 255, 100 / 255, 55 / 255));
      expect(Math.round(rgb.r * 255)).toBe(227);
      expect(Math.round(rgb.g * 255)).toBe(178);
      expect(Math.round(rgb.b * 255)).toBe(155);
    });
  });

  describe("shade", () => {
    it("rgb[200, 100, 55] should be shaded", () => {
      const rgb = shade(new RgbColor(200 / 255, 100 / 255, 55 / 255));
      expect(Math.round(rgb.r * 255)).toBe(100);
      expect(Math.round(rgb.g * 255)).toBe(50);
      expect(Math.round(rgb.b * 255)).toBe(28);
    });
  });

  describe("negate", () => {
    it("rgb[200, 100, 55] should be negated", () => {
      const rgb = negate(new RgbColor(200 / 255, 100 / 255, 55 / 255));
      expect(Math.round(rgb.r * 255)).toBe(55);
      expect(Math.round(rgb.g * 255)).toBe(155);
      expect(Math.round(rgb.b * 255)).toBe(200);
    });
  });

  describe("greyscale", () => {
    it("should make hsl[180, 50, 50] greyscale", () => {
      const hsl = greyscaleHsl(new HslColor(0.5, 0.5, 0.5));
      expect(hsl.h).toBe(0.5);
      expect(hsl.s).toBe(0);
      expect(hsl.l).toBe(0.5);
    });

    it("should make rgb[128, 255, 255] greyscale", () => {
      const rgb = greyscaleRgb(new RgbColor(0.5, 1, 1));
      expect(Math.round(rgb.r * 255)).toBe(217);
      expect(Math.round(rgb.g * 255)).toBe(217);
      expect(Math.round(rgb.b * 255)).toBe(217);
    });
  });
});

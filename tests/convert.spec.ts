import {RgbColor, HslColor, HsvColor, HwbColor, CmykColor, XyzColor, LabColor, LchColor} from "../lib/color";
import {rgbLinearize, rgbDelinearize, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHwb, hwbToRgb, rgbToCmyk, cmykToRgb,
  rgbToHex, hexToRgb, linearRgbToXyz, xyzToLinearRgb, xyzToLab, labToXyz, labToLch, lchToLab} from "../lib/convert";

describe("convert", () => {
  it("should convert srgb[140, 200, 100] to lrgb[196, 229, 168]", () => {
    const srgb = new RgbColor(140 / 255, 200 / 255, 100 / 255);
    const lrgb = rgbDelinearize(srgb);

    expect(Math.round(lrgb.r * 255)).toBe(196);
    expect(Math.round(lrgb.g * 255)).toBe(229);
    expect(Math.round(lrgb.b * 255)).toBe(168);
  });

  it("should convert lrgb[196, 229, 168] to srgb[140, 200, 100]", () => {
    const lrgb = new RgbColor(196 / 255, 229 / 255, 168 / 255);
    const srgb = rgbLinearize(lrgb);

    expect(Math.round(srgb.r * 255)).toBe(141);
    expect(Math.round(srgb.g * 255)).toBe(200);
    expect(Math.round(srgb.b * 255)).toBe(100);
  });

  it("should convert rgb[140, 200, 100] to hsl[96, 48, 59]", () => {
    const rgb = new RgbColor(140 / 255, 200 / 255, 100 / 255);
    const hsl = rgbToHsl(rgb);

    expect(hsl.h).toBeCloseTo(96 / 360, 2);
    expect(hsl.s).toBeCloseTo(48 / 100, 2);
    expect(hsl.l).toBeCloseTo(59 / 100, 2);
  });

  it("should convert hsl[96, 48, 59] to rgb[140, 201, 100]", () => {
    const hsl = new HslColor(96 / 360, 48 / 100, 59 / 100);
    const rgb = hslToRgb(hsl);

    expect(rgb.r).toBeCloseTo(140 / 255, 2);
    expect(rgb.g).toBeCloseTo(201 / 255, 2);
    expect(rgb.b).toBeCloseTo(100 / 255, 2);
  });

  it("should convert rgb[140, 200, 100] to hsv[96, 50, 78]", () => {
    const rgb = new RgbColor(140 / 255, 200 / 255, 100 / 255);
    const hsv = rgbToHsv(rgb);

    expect(hsv.h).toBeCloseTo(96 / 360, 2);
    expect(hsv.s).toBeCloseTo(50 / 100, 2);
    expect(hsv.v).toBeCloseTo(78 / 100, 2);
  });

  it("should convert hsv[96, 50, 78] to rgb[139, 199, 99]", () => {
    const hsv = new HsvColor(96 / 360, 50 / 100, 78 / 100);
    const rgb = hsvToRgb(hsv);

    expect(rgb.r).toBeCloseTo(139 / 255, 2);
    expect(rgb.g).toBeCloseTo(199 / 255, 2);
    expect(rgb.b).toBeCloseTo(99 / 255, 2);
  });

  it("should convert rgb[140, 200, 100] to hwb[96, 39, 22]", () => {
    const rgb = new RgbColor(140 / 255, 200 / 255, 100 / 255);
    const hwb = rgbToHwb(rgb);

    expect(hwb.h).toBeCloseTo(96 / 360, 2);
    expect(hwb.w).toBeCloseTo(39 / 100, 2);
    expect(hwb.b).toBeCloseTo(22 / 100, 2);
  });

  it("should convert hwb[96, 39, 22] to rgb[139, 199, 99]", () => {
    const hwb = new HwbColor(96 / 360, 39 / 100, 22 / 100);
    const rgb = hwbToRgb(hwb);

    expect(rgb.r).toBeCloseTo(139 / 255, 2);
    expect(rgb.g).toBeCloseTo(199 / 255, 2);
    expect(rgb.b).toBeCloseTo(99 / 255, 2);
  });

  it("should convert rgb[140, 200, 100] to cmyk[30, 0, 50, 22]", () => {
    const rgb = new RgbColor(140 / 255, 200 / 255, 100 / 255);
    const cmyk = rgbToCmyk(rgb);

    expect(cmyk.c).toBeCloseTo(30 / 100, 2);
    expect(cmyk.m).toBeCloseTo(0, 2);
    expect(cmyk.y).toBeCloseTo(50 / 100, 2);
    expect(cmyk.k).toBeCloseTo(22 / 100, 2);
  });

  it("should convert rgb[0, 0, 0] to cmyk[0, 0, 0, 100]", () => {
    const rgb = new RgbColor(0, 0, 0);
    const cmyk = rgbToCmyk(rgb);

    expect(cmyk.c).toBeCloseTo(0, 1);
    expect(cmyk.m).toBeCloseTo(0, 1);
    expect(cmyk.y).toBeCloseTo(0, 1);
    expect(cmyk.k).toBeCloseTo(1, 1);
  });

  it("should convert cmyk[30, 0, 50, 22] to rgb[139, 199, 99]", () => {
    const cmyk = new CmykColor(30 / 100, 0, 50 / 100, 22 / 100);
    const rgb = cmykToRgb(cmyk);

    expect(rgb.r).toBeCloseTo(139 / 255, 2);
    expect(rgb.g).toBeCloseTo(199 / 255, 2);
    expect(rgb.b).toBeCloseTo(99 / 255, 2);
  });

  it("should convert rgb[92, 191, 84] to hex[5cbf54]", () => {
    const rgb = new RgbColor(92 / 255, 191 / 255, 84 / 255);
    const hex = rgbToHex(rgb);

    expect(hex).toBe("5cbf54");
  });

  it("should convert hex[abcdef] to rgb[171, 205, 239]", () => {
    const hex = "abcdef";
    const rgb = hexToRgb(hex);

    expect(rgb.r).toBeCloseTo(171 / 255, 2);
    expect(rgb.g).toBeCloseTo(205 / 255, 2);
    expect(rgb.b).toBeCloseTo(239 / 255, 2);
  });

  describe("hwb to rgb", () => {
    it("should handle extreme values", () => {
      for (let angle = 0; angle <= 360; angle++) {
        let hwb = new HwbColor(angle / 360, 0, 1);
        let rgb = hwbToRgb(hwb);

        expect(rgb.r).toBe(0);
        expect(rgb.g).toBe(0);
        expect(rgb.b).toBe(0);

        hwb = new HwbColor(angle / 360, 1, 0);
        rgb = hwbToRgb(hwb);

        expect(rgb.r).toBe(1);
        expect(rgb.g).toBe(1);
        expect(rgb.b).toBe(1);

        hwb = new HwbColor(angle / 360, 1, 1);
        rgb = hwbToRgb(hwb);

        expect(rgb.r).toBeCloseTo(0.5, 2);
        expect(rgb.g).toBeCloseTo(0.5, 2);
        expect(rgb.b).toBeCloseTo(0.5, 2);
      }
    });

    it("should convert hwb[0, 0, 0] to rgb[255, 0, 0]", () => {
      const hwb = new HwbColor(0, 0, 0);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBe(1);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(0);
    });

    it("should convert hwb[0, 20, 40] to rgb[153, 51, 51]", () => {
      const hwb = new HwbColor(0, 20 / 100, 40 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(153 / 255, 2);
      expect(rgb.g).toBeCloseTo(51 / 255, 2);
      expect(rgb.b).toBeCloseTo(51 / 255, 2);
    });

    it("should convert hwb[0, 40, 40] to rgb[153, 102, 102]", () => {
      const hwb = new HwbColor(0, 40 / 100, 40 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(153 / 255, 2);
      expect(rgb.g).toBeCloseTo(102 / 255, 2);
      expect(rgb.b).toBeCloseTo(102 / 255, 2);
    });

    it("should convert hwb[0, 40, 20] to rgb[204, 102, 102]", () => {
      const hwb = new HwbColor(0, 40 / 100, 20 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(204 / 255, 2);
      expect(rgb.g).toBeCloseTo(102 / 255, 2);
      expect(rgb.b).toBeCloseTo(102 / 255, 2);
    });

    it("should convert hwb[120, 0, 0] to rgb[0, 255, 0]", () => {
      const hwb = new HwbColor(120 / 360, 0, 0);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(1);
      expect(rgb.b).toBe(0);
    });

    it("should convert hwb[120, 20, 40] to rgb[51, 153, 51]", () => {
      const hwb = new HwbColor(120 / 360, 20 / 100, 40 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(51 / 255, 2);
      expect(rgb.g).toBeCloseTo(153 / 255, 2);
      expect(rgb.b).toBeCloseTo(51 / 255, 2);
    });

    it("should convert hwb[120, 40, 40] to rgb[102, 153, 102]", () => {
      const hwb = new HwbColor(120 / 360, 40 / 100, 40 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(102 / 255, 2);
      expect(rgb.g).toBeCloseTo(153 / 255, 2);
      expect(rgb.b).toBeCloseTo(102 / 255, 2);
    });

    it("should convert hwb[120, 40, 20] to rgb[102, 204, 102]", () => {
      const hwb = new HwbColor(120 / 360, 40 / 100, 20 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(102 / 255, 2);
      expect(rgb.g).toBeCloseTo(204 / 255, 2);
      expect(rgb.b).toBeCloseTo(102 / 255, 2);
    });

    it("should convert hwb[240, 0, 0] to rgb[0, 0, 255]", () => {
      const hwb = new HwbColor(240 / 360, 0, 0);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBe(0);
      expect(rgb.g).toBe(0);
      expect(rgb.b).toBe(1);
    });

    it("should convert hwb[240, 20, 40] to rgb[51, 51, 153]", () => {
      const hwb = new HwbColor(240 / 360, 20 / 100, 40 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(51 / 255, 2);
      expect(rgb.g).toBeCloseTo(51 / 255, 2);
      expect(rgb.b).toBeCloseTo(153 / 255, 2);
    });

    it("should convert hwb[240, 40, 40] to rgb[102, 102, 153]", () => {
      const hwb = new HwbColor(240 / 360, 40 / 100, 40 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(102 / 255, 2);
      expect(rgb.g).toBeCloseTo(102 / 255, 2);
      expect(rgb.b).toBeCloseTo(153 / 255, 2);
    });

    it("should convert hwb[240, 40, 20] to rgb[102, 102, 204]", () => {
      const hwb = new HwbColor(240 / 360, 40 / 100, 20 / 100);
      const rgb = hwbToRgb(hwb);

      expect(rgb.r).toBeCloseTo(102 / 255, 2);
      expect(rgb.g).toBeCloseTo(102 / 255, 2);
      expect(rgb.b).toBeCloseTo(204 / 255, 2);
    });
  });

  it("should convert lrgb[314, 45, 42] to xyz[60, 40, 20]", () => {
    const lrgb = new RgbColor(314 / 255, 45 / 255, 42 / 255);
    const xyz = linearRgbToXyz(lrgb);

    expect(Math.round(xyz.x * 100)).toBe(60);
    expect(Math.round(xyz.y * 100)).toBe(40);
    expect(Math.round(xyz.z * 100)).toBe(20);
  });

  it("should convert xyz[60, 40, 20] to lrgb[314, 45, 42]", () => {
    const xyz = new XyzColor(60 / 100, 40 / 100, 20 / 100);
    const lrgb = xyzToLinearRgb(xyz);

    expect(Math.round(lrgb.r * 255)).toBe(314);
    expect(Math.round(lrgb.g * 255)).toBe(45);
    expect(Math.round(lrgb.b * 255)).toBe(42);
  });

  it("should convert xyz[60, 40, 20] to lab[71, 54, 36]", () => {
    const xyz = new XyzColor(60 / 100, 40 / 100, 20 / 100);
    const lab = xyzToLab(xyz);

    expect(Math.round(lab.l * 100)).toBe(71);
    expect(Math.round(lab.a * 100)).toBe(54);
    expect(Math.round(lab.b * 100)).toBe(36);
  });

  it("should convert lab[71, 54, 36] to xyz[60, 42, 18]", () => {
    const lab = new LabColor(71 / 100, 54 / 100, 36 / 100);
    const xyz = labToXyz(lab);

    expect(Math.round(xyz.x * 100)).toBe(60);
    expect(Math.round(xyz.y * 100)).toBe(42);
    expect(Math.round(xyz.z * 100)).toBe(20);
  });

  it("should convert lab[71, 54, 36] to lch[71, 65, 34]", () => {
    const lab = new LabColor(71 / 100, 54 / 100, 36 / 100);
    const lch = labToLch(lab);

    expect(Math.round(lch.l * 100)).toBe(71);
    expect(Math.round(lch.c * 100)).toBe(65);
    expect(Math.round(lch.h * 360)).toBe(34);
  });

  it("should convert lch[71, 65, 34] to lab[71, 54, 36]", () => {
    const lch = new LchColor(71 / 100, 65 / 100, 34 / 360);
    const lab = lchToLab(lch);

    expect(Math.round(lab.l * 100)).toBe(71);
    expect(Math.round(lab.a * 100)).toBe(54);
    expect(Math.round(lab.b * 100)).toBe(36);
  });
});

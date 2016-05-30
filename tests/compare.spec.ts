import {RgbColor, HslColor, HsvColor, HwbColor, CmykColor} from "../lib/color";
import {almostEqualRgb, almostEqualHsl, almostEqualHsv, almostEqualHwb, almostEqualCmyk} from "../lib/compare";

describe("compare", () => {
  describe("rgb", () => {
    it("should be almost equal", () => {
      const c1 = new RgbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new RgbColor(0.1, 0.2, 0.3, 0.4);
      expect(almostEqualRgb(c1, c2)).toBeTruthy();
    });

    it("shouldn't be almost equal", () => {
      const c1 = new RgbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new RgbColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new RgbColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new RgbColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new RgbColor(0.1, 0.2, 0.3, 0.5);

      expect(almostEqualRgb(c1, c2)).toBeFalsy();
      expect(almostEqualRgb(c1, c3)).toBeFalsy();
      expect(almostEqualRgb(c1, c4)).toBeFalsy();
      expect(almostEqualRgb(c1, c5)).toBeFalsy();
    });
  });

  describe("hsl", () => {
    it("should be equal", () => {
      const c1 = new HslColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HslColor(0.1, 0.2, 0.3, 0.4);
      expect(almostEqualHsl(c1, c2)).toBeTruthy();
    });

    it("shouldn't be equal", () => {
      const c1 = new HslColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HslColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new HslColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new HslColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new HslColor(0.1, 0.2, 0.3, 0.5);

      expect(almostEqualHsl(c1, c2)).toBeFalsy();
      expect(almostEqualHsl(c1, c3)).toBeFalsy();
      expect(almostEqualHsl(c1, c4)).toBeFalsy();
      expect(almostEqualHsl(c1, c5)).toBeFalsy();
    });
  });

  describe("hsv", () => {
    it("should be almost equal", () => {
      const c1 = new HsvColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HsvColor(0.1, 0.2, 0.3, 0.4);
      expect(almostEqualHsv(c1, c2)).toBeTruthy();
    });

    it("shouldn't be almost equal", () => {
      const c1 = new HsvColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HsvColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new HsvColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new HsvColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new HsvColor(0.1, 0.2, 0.3, 0.5);

      expect(almostEqualHsv(c1, c2)).toBeFalsy();
      expect(almostEqualHsv(c1, c3)).toBeFalsy();
      expect(almostEqualHsv(c1, c4)).toBeFalsy();
      expect(almostEqualHsv(c1, c5)).toBeFalsy();
    });
  });

  describe("Hwb", () => {
    it("should be almost equal", () => {
      const c1 = new HwbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HwbColor(0.1, 0.2, 0.3, 0.4);
      expect(almostEqualHwb(c1, c2)).toBeTruthy();
    });

    it("shouldn't be almost equal", () => {
      const c1 = new HwbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HwbColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new HwbColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new HwbColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new HwbColor(0.1, 0.2, 0.3, 0.5);

      expect(almostEqualHwb(c1, c2)).toBeFalsy();
      expect(almostEqualHwb(c1, c3)).toBeFalsy();
      expect(almostEqualHwb(c1, c4)).toBeFalsy();
      expect(almostEqualHwb(c1, c5)).toBeFalsy();
    });
  });

  describe("cmyk", () => {
    it("should be almost equal", () => {
      const c1 = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      const c2 = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      expect(almostEqualCmyk(c1, c2)).toBeTruthy();
    });

    it("shouldn't be almost equal", () => {
      const c1 = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      const c2 = new CmykColor(0.2, 0.2, 0.3, 0.4, 0.5);
      const c3 = new CmykColor(0.1, 0.3, 0.3, 0.4, 0.5);
      const c4 = new CmykColor(0.1, 0.2, 0.4, 0.4, 0.5);
      const c5 = new CmykColor(0.1, 0.2, 0.3, 0.5, 0.5);
      const c6 = new CmykColor(0.1, 0.2, 0.3, 0.5, 0.6);

      expect(almostEqualCmyk(c1, c2)).toBeFalsy();
      expect(almostEqualCmyk(c1, c3)).toBeFalsy();
      expect(almostEqualCmyk(c1, c4)).toBeFalsy();
      expect(almostEqualCmyk(c1, c5)).toBeFalsy();
      expect(almostEqualCmyk(c1, c6)).toBeFalsy();
    });
  });
});

import {RgbColor, HslColor, HsvColor, HwbColor, CmykColor, WhiteRgbColor, BlackRgbColor} from "../lib/color";

describe("color", () => {
  describe("rgb", () => {
    it("should assign properties", () => {
      const c = new RgbColor(0.1, 0.2, 0.3, 0.4);
      expect(c.r).toBe(0.1);
      expect(c.g).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.alpha).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new RgbColor(0.1, 0.2, 0.3);
      expect(c.r).toBe(0.1);
      expect(c.g).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.alpha).toBe(1);
    });
  });

  describe("hsl", () => {
    it("should assign properties", () => {
      const c = new HslColor(0.1, 0.2, 0.3, 0.4);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.l).toBe(0.3);
      expect(c.alpha).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new HslColor(0.1, 0.2, 0.3);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.l).toBe(0.3);
      expect(c.alpha).toBe(1);
    });
  });

  describe("hsv", () => {
    it("should assign properties", () => {
      const c = new HsvColor(0.1, 0.2, 0.3, 0.4);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.v).toBe(0.3);
      expect(c.alpha).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new HsvColor(0.1, 0.2, 0.3);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.v).toBe(0.3);
      expect(c.alpha).toBe(1);
    });
  });

  describe("Hwb", () => {
    it("should assign properties", () => {
      const c = new HwbColor(0.1, 0.2, 0.3, 0.4);
      expect(c.h).toBe(0.1);
      expect(c.w).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.alpha).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new HwbColor(0.1, 0.2, 0.3);
      expect(c.h).toBe(0.1);
      expect(c.w).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.alpha).toBe(1);
    });
  });

  describe("cmyk", () => {
    it("should assign properties", () => {
      const c = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      expect(c.c).toBe(0.1);
      expect(c.m).toBe(0.2);
      expect(c.y).toBe(0.3);
      expect(c.k).toBe(0.4);
      expect(c.alpha).toBe(0.5);
    });

    it("should have default alpha 1", () => {
      const c = new CmykColor(0.1, 0.2, 0.3, 0.4);
      expect(c.c).toBe(0.1);
      expect(c.m).toBe(0.2);
      expect(c.y).toBe(0.3);
      expect(c.k).toBe(0.4);
      expect(c.alpha).toBe(1);
    });
  });

  describe("constants", () => {
    it("WhiteRgbColor should be white", () => {
      expect(WhiteRgbColor.r).toBe(1);
      expect(WhiteRgbColor.g).toBe(1);
      expect(WhiteRgbColor.b).toBe(1);
      expect(WhiteRgbColor.alpha).toBe(1);
    });

    it("BlackRgbColor should be black", () => {
      expect(BlackRgbColor.r).toBe(0);
      expect(BlackRgbColor.g).toBe(0);
      expect(BlackRgbColor.b).toBe(0);
      expect(BlackRgbColor.alpha).toBe(1);
    });
  });
});

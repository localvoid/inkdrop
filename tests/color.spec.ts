import {RgbColor, HslColor, HsvColor, HwbColor, CmykColor, WhiteRgbColor, BlackRgbColor} from "../lib/color";

describe("color", () => {
  describe("rgb", () => {
    it("should assign properties", () => {
      const c = new RgbColor(0.1, 0.2, 0.3, 0.4);
      expect(c.r).toBe(0.1);
      expect(c.g).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.a).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new RgbColor(0.1, 0.2, 0.3);
      expect(c.r).toBe(0.1);
      expect(c.g).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.a).toBe(1);
    });

    it("should be equal", () => {
      const c1 = new RgbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new RgbColor(0.1, 0.2, 0.3, 0.4);
      expect(c1.equals(c2)).toBeTruthy();
    });

    it("shouldn't be equal", () => {
      const c1 = new RgbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new RgbColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new RgbColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new RgbColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new RgbColor(0.1, 0.2, 0.3, 0.5);

      expect(c1.equals(c2)).toBeFalsy();
      expect(c1.equals(c3)).toBeFalsy();
      expect(c1.equals(c4)).toBeFalsy();
      expect(c1.equals(c5)).toBeFalsy();
    });
  });

  describe("hsl", () => {
    it("should assign properties", () => {
      const c = new HslColor(0.1, 0.2, 0.3, 0.4);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.l).toBe(0.3);
      expect(c.a).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new HslColor(0.1, 0.2, 0.3);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.l).toBe(0.3);
      expect(c.a).toBe(1);
    });

    it("should be equal", () => {
      const c1 = new HslColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HslColor(0.1, 0.2, 0.3, 0.4);
      expect(c1.equals(c2)).toBeTruthy();
    });

    it("shouldn't be equal", () => {
      const c1 = new HslColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HslColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new HslColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new HslColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new HslColor(0.1, 0.2, 0.3, 0.5);

      expect(c1.equals(c2)).toBeFalsy();
      expect(c1.equals(c3)).toBeFalsy();
      expect(c1.equals(c4)).toBeFalsy();
      expect(c1.equals(c5)).toBeFalsy();
    });
  });

  describe("hsv", () => {
    it("should assign properties", () => {
      const c = new HsvColor(0.1, 0.2, 0.3, 0.4);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.v).toBe(0.3);
      expect(c.a).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new HsvColor(0.1, 0.2, 0.3);
      expect(c.h).toBe(0.1);
      expect(c.s).toBe(0.2);
      expect(c.v).toBe(0.3);
      expect(c.a).toBe(1);
    });

    it("should be equal", () => {
      const c1 = new HsvColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HsvColor(0.1, 0.2, 0.3, 0.4);
      expect(c1.equals(c2)).toBeTruthy();
    });

    it("shouldn't be equal", () => {
      const c1 = new HsvColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HsvColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new HsvColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new HsvColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new HsvColor(0.1, 0.2, 0.3, 0.5);

      expect(c1.equals(c2)).toBeFalsy();
      expect(c1.equals(c3)).toBeFalsy();
      expect(c1.equals(c4)).toBeFalsy();
      expect(c1.equals(c5)).toBeFalsy();
    });
  });

  describe("Hwb", () => {
    it("should assign properties", () => {
      const c = new HwbColor(0.1, 0.2, 0.3, 0.4);
      expect(c.h).toBe(0.1);
      expect(c.w).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.a).toBe(0.4);
    });

    it("should have default alpha 1", () => {
      const c = new HwbColor(0.1, 0.2, 0.3);
      expect(c.h).toBe(0.1);
      expect(c.w).toBe(0.2);
      expect(c.b).toBe(0.3);
      expect(c.a).toBe(1);
    });

    it("should be equal", () => {
      const c1 = new HwbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HwbColor(0.1, 0.2, 0.3, 0.4);
      expect(c1.equals(c2)).toBeTruthy();
    });

    it("shouldn't be equal", () => {
      const c1 = new HwbColor(0.1, 0.2, 0.3, 0.4);
      const c2 = new HwbColor(0.2, 0.2, 0.3, 0.4);
      const c3 = new HwbColor(0.1, 0.3, 0.3, 0.4);
      const c4 = new HwbColor(0.1, 0.2, 0.4, 0.4);
      const c5 = new HwbColor(0.1, 0.2, 0.3, 0.5);

      expect(c1.equals(c2)).toBeFalsy();
      expect(c1.equals(c3)).toBeFalsy();
      expect(c1.equals(c4)).toBeFalsy();
      expect(c1.equals(c5)).toBeFalsy();
    });
  });

  describe("cmyk", () => {
    it("should assign properties", () => {
      const c = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      expect(c.c).toBe(0.1);
      expect(c.m).toBe(0.2);
      expect(c.y).toBe(0.3);
      expect(c.k).toBe(0.4);
      expect(c.a).toBe(0.5);
    });

    it("should have default alpha 1", () => {
      const c = new CmykColor(0.1, 0.2, 0.3, 0.4);
      expect(c.c).toBe(0.1);
      expect(c.m).toBe(0.2);
      expect(c.y).toBe(0.3);
      expect(c.k).toBe(0.4);
      expect(c.a).toBe(1);
    });

    it("should be equal", () => {
      const c1 = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      const c2 = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      expect(c1.equals(c2)).toBeTruthy();
    });

    it("shouldn't be equal", () => {
      const c1 = new CmykColor(0.1, 0.2, 0.3, 0.4, 0.5);
      const c2 = new CmykColor(0.2, 0.2, 0.3, 0.4, 0.5);
      const c3 = new CmykColor(0.1, 0.3, 0.3, 0.4, 0.5);
      const c4 = new CmykColor(0.1, 0.2, 0.4, 0.4, 0.5);
      const c5 = new CmykColor(0.1, 0.2, 0.3, 0.5, 0.5);
      const c6 = new CmykColor(0.1, 0.2, 0.3, 0.5, 0.6);

      expect(c1.equals(c2)).toBeFalsy();
      expect(c1.equals(c3)).toBeFalsy();
      expect(c1.equals(c4)).toBeFalsy();
      expect(c1.equals(c5)).toBeFalsy();
      expect(c1.equals(c6)).toBeFalsy();
    });
  });

  describe("constants", () => {
    it("WhiteRgbColor should be white", () => {
      expect(WhiteRgbColor.r).toBe(1);
      expect(WhiteRgbColor.g).toBe(1);
      expect(WhiteRgbColor.b).toBe(1);
      expect(WhiteRgbColor.a).toBe(1);
    });

    it("BlackRgbColor should be black", () => {
      expect(BlackRgbColor.r).toBe(0);
      expect(BlackRgbColor.g).toBe(0);
      expect(BlackRgbColor.b).toBe(0);
      expect(BlackRgbColor.a).toBe(1);
    });
  });
});

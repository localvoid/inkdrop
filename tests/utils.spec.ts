import {RgbColor} from "../lib/color";
import {luminance, brightness, isDark, isLight} from "../lib/utils";

describe("utils", () => {
  describe("luminance", () => {
    it("should have luminance 0 for rgb[0, 0, 0]", () => {
      const rgb = new RgbColor(0, 0, 0);
      expect(luminance(rgb)).toBe(0);
    });

    it("should have luminance 1 for rgb[255, 255, 255]", () => {
      const rgb = new RgbColor(1, 1, 1);
      expect(luminance(rgb)).toBe(1);
    });

    it("should have luminance ~0.21 for rgb[128, 128, 128]", () => {
      const rgb = new RgbColor(0.5, 0.5, 0.5);
      expect(luminance(rgb)).toBeCloseTo(0.21, 2);
    });
  });

  describe("brightness", () => {
    it("should have brightness 0 for rgb[0, 0, 0]", () => {
      const rgb = new RgbColor(0, 0, 0);
      expect(brightness(rgb)).toBe(0);
    });

    it("should have brightness 1 for rgb[255, 255, 255]", () => {
      const rgb = new RgbColor(1, 1, 1);
      expect(brightness(rgb)).toBe(1);
    });

    it("should have brightness ~0.5 for rgb[128, 128, 128]", () => {
      const rgb = new RgbColor(0.5, 0.5, 0.5);
      expect(brightness(rgb)).toBeCloseTo(0.5, 2);
    });

    it("should have brightness ~0.45 for rgb[64, 128, 192]", () => {
      const rgb = new RgbColor(0.25, 0.5, 0.75);
      expect(brightness(rgb)).toBeCloseTo(0.45, 2);
    });
  });

  describe("isDark", () => {
    it("rgb[0, 0, 0] should be dark", () => {
      expect(isDark(new RgbColor(0, 0, 0))).toBeTruthy();
    });

    it("rgb[255, 255, 255] shouldn't be dark", () => {
      expect(isDark(new RgbColor(1, 1, 1))).toBeFalsy();
    });

    it("rgb[100, 100, 100] should be dark", () => {
      expect(isDark(new RgbColor(100 / 255, 100 / 255, 100 / 255))).toBeTruthy();
    });

    it("rgb[140, 140, 140] shouldn't be dark", () => {
      expect(isDark(new RgbColor(140 / 255, 140 / 255, 140 / 255))).toBeFalsy();
    });
  });

  describe("isLight", () => {
    it("rgb[0, 0, 0] shouldn't be light", () => {
      expect(isLight(new RgbColor(0, 0, 0))).toBeFalsy();
    });

    it("rgb[255, 255, 255] should be light", () => {
      expect(isLight(new RgbColor(1, 1, 1))).toBeTruthy();
    });

    it("rgb[100, 100, 100] shouldn't be light", () => {
      expect(isLight(new RgbColor(100 / 255, 100 / 255, 100 / 255))).toBeFalsy();
    });

    it("rgb[140, 140, 140] should be light", () => {
      expect(isLight(new RgbColor(140 / 255, 140 / 255, 140 / 255))).toBeTruthy();
    });
  });
});

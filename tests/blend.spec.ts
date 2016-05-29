import {RgbColor} from "../lib/color";
import {blendMultiply, blendScreen, blendOverlay, blendSoftlight, blendHardlight, blendDifference,
  blendExclusion, blendAverage, blendNegation} from "../lib/blend";

describe("blend", () => {
  describe("multiply", () => {
    it("should multiply rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[64, 64, 64]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendMultiply(a, b);
      expect(Math.round(rgb.r * 255)).toBe(64);
      expect(Math.round(rgb.g * 255)).toBe(64);
      expect(Math.round(rgb.b * 255)).toBe(64);
    });
  });

  describe("screen", () => {
    it("should screen rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[192, 192, 192]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendScreen(a, b);
      expect(Math.round(rgb.r * 255)).toBe(192);
      expect(Math.round(rgb.g * 255)).toBe(192);
      expect(Math.round(rgb.b * 255)).toBe(192);
    });
  });

  describe("overlay", () => {
    it("should overlay rgb[128, 128, 128] with rgb[192, 192, 192] and get rgb[192, 192, 192]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(192 / 255, 192 / 255, 192 / 255);
      const rgb = blendOverlay(a, b);
      expect(Math.round(rgb.r * 255)).toBe(192);
      expect(Math.round(rgb.g * 255)).toBe(192);
      expect(Math.round(rgb.b * 255)).toBe(192);
    });
  });

  describe("softlight", () => {
    it("should softlight rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[128, 128, 128]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendSoftlight(a, b);
      expect(Math.round(rgb.r * 255)).toBe(128);
      expect(Math.round(rgb.g * 255)).toBe(128);
      expect(Math.round(rgb.b * 255)).toBe(128);
    });
  });

  describe("hardlight", () => {
    it("should hardlight rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[128, 128, 128]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendHardlight(a, b);
      expect(Math.round(rgb.r * 255)).toBe(128);
      expect(Math.round(rgb.g * 255)).toBe(128);
      expect(Math.round(rgb.b * 255)).toBe(128);
    });
  });

  describe("difference", () => {
    it("should differnce rgb[128, 128, 128] with rgb[32, 32, 32] and get rgb[96, 96, 96]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(32 / 255, 32 / 255, 32 / 255);
      const rgb = blendDifference(a, b);
      expect(Math.round(rgb.r * 255)).toBe(96);
      expect(Math.round(rgb.g * 255)).toBe(96);
      expect(Math.round(rgb.b * 255)).toBe(96);
    });
  });

  describe("exclusion", () => {
    it("should exclusion rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[127, 127, 127]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendExclusion(a, b);
      expect(Math.round(rgb.r * 255)).toBe(127);
      expect(Math.round(rgb.g * 255)).toBe(127);
      expect(Math.round(rgb.b * 255)).toBe(127);
    });
  });

  describe("average", () => {
    it("should average rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[128, 128, 128]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendAverage(a, b);
      expect(Math.round(rgb.r * 255)).toBe(128);
      expect(Math.round(rgb.g * 255)).toBe(128);
      expect(Math.round(rgb.b * 255)).toBe(128);
    });
  });

  describe("negation", () => {
    it("should negation rgb[128, 128, 128] with rgb[128, 128, 128] and get rgb[254, 254, 254]", () => {
      const a = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const b = new RgbColor(128 / 255, 128 / 255, 128 / 255);
      const rgb = blendNegation(a, b);
      expect(Math.round(rgb.r * 255)).toBe(254);
      expect(Math.round(rgb.g * 255)).toBe(254);
      expect(Math.round(rgb.b * 255)).toBe(254);
    });
  });
});

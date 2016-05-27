import {HslColor, HsvColor} from "../lib/color";
import {complement, triad, tetrad, splitComplement, analogous, monochromatic} from "../lib/combination";

describe("combination", () => {
  describe("complement", () => {
    it("should create complement color for hsl[90, 20, 20] => hsl[270, 20, 20]", () => {
      const r = complement(new HslColor(90 / 360, 0.2, 0.2));
      expect(Math.round(r.h * 360)).toBe(270);
      expect(r.s).toBe(0.2);
      expect(r.l).toBe(0.2);
    });
  });

  describe("triad", () => {
    it("should create triad colors for hsl[90, 20, 20]", () => {
      const hsl = new HslColor(90 / 360, 0.2, 0.2);
      const r = triad(hsl);
      expect(r.length).toBe(3);
      expect(r[0].equals(hsl)).toBeTruthy();

      let i = r[1];
      expect(Math.round(i.h * 360)).toBe(210);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[2];
      expect(Math.round(i.h * 360)).toBe(330);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);
    });
  });

  describe("tetrad", () => {
    it("should create tetrad colors for hsl[90, 20, 20]", () => {
      const hsl = new HslColor(90 / 360, 0.2, 0.2);
      const r = tetrad(hsl);
      expect(r.length).toBe(4);
      expect(r[0].equals(hsl)).toBeTruthy();

      let i = r[1];
      expect(Math.round(i.h * 360)).toBe(180);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[2];
      expect(Math.round(i.h * 360)).toBe(270);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[3];
      expect(Math.round(i.h * 360)).toBe(0);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);
    });
  });

  describe("splitComplement", () => {
    it("should create splitComplement colors for hsl[90, 20, 20]", () => {
      const hsl = new HslColor(90 / 360, 0.2, 0.2);
      const r = splitComplement(hsl);
      expect(r.length).toBe(3);
      expect(r[0].equals(hsl)).toBeTruthy();

      let i = r[1];
      expect(Math.round(i.h * 360)).toBe(162);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[2];
      expect(Math.round(i.h * 360)).toBe(306);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);
    });
  });

  describe("analogous", () => {
    it("should create analogous colors for hsl[90, 20, 20]", () => {
      const hsl = new HslColor(90 / 360, 0.2, 0.2);
      const r = analogous(hsl);
      expect(r.length).toBe(6);

      let i = r[0];
      expect(Math.round(i.h * 360)).toBe(54);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[1];
      expect(Math.round(i.h * 360)).toBe(66);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[2];
      expect(Math.round(i.h * 360)).toBe(78);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[3];
      expect(Math.round(i.h * 360)).toBe(90);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[4];
      expect(Math.round(i.h * 360)).toBe(102);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);

      i = r[5];
      expect(Math.round(i.h * 360)).toBe(114);
      expect(i.s).toBe(0.2);
      expect(i.l).toBe(0.2);
    });
  });

  describe("monochromatic", () => {
    it("should create monochromatic colors for hsv[90, 20, 20]", () => {
      const hsv = new HsvColor(90 / 360, 0.2, 0.2);
      const r = monochromatic(hsv);
      expect(r.length).toBe(6);

      let i = r[0];
      expect(i.h).toBeCloseTo(90 / 360, 2);
      expect(i.s).toBe(0.2);
      expect(Math.round(i.v * 100)).toBe(20);

      i = r[1];
      expect(i.h).toBeCloseTo(90 / 360, 2);
      expect(i.s).toBe(0.2);
      expect(Math.round(i.v * 100)).toBe(37);

      i = r[2];
      expect(i.h).toBeCloseTo(90 / 360, 2);
      expect(i.s).toBe(0.2);
      expect(Math.round(i.v * 100)).toBe(53);

      i = r[3];
      expect(i.h).toBeCloseTo(90 / 360, 2);
      expect(i.s).toBe(0.2);
      expect(Math.round(i.v * 100)).toBe(70);

      i = r[4];
      expect(i.h).toBeCloseTo(90 / 360, 2);
      expect(i.s).toBe(0.2);
      expect(Math.round(i.v * 100)).toBe(87);

      i = r[5];
      expect(i.h).toBeCloseTo(90 / 360, 2);
      expect(i.s).toBe(0.2);
      expect(Math.round(i.v * 100)).toBe(3);
    });
  });
});

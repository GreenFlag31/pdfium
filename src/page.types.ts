import type { PDFiumRenderFunction, PDFiumRenderOptions } from "./types.js";

export type PDFiumPageRenderFunction = PDFiumRenderFunction;
export type PDFiumPageRenderOptions = PDFiumRenderOptions;

export type PDFiumPageRenderCallback = (options: PDFiumPageRenderOptions) => Promise<Uint8Array>;

export type PDFiumPageRenderParams = {
  render?: PDFiumPageRenderFunction;
  renderFormFields?: boolean;
  colorSpace?: ColorSpace;
  scale?: number;
  width?: number;
  height?: number;
};

export type ColorSpace = "BGRA" | "Gray";

export type PDFiumScaleAndRender = {
  scale: number;
  render: PDFiumPageRenderFunction;
  colorSpace: ColorSpace;
};

export type PDFiumPageRenderOptionsValidated = {
  scale: number;
  render: PDFiumPageRenderFunction;
  colorSpace: ColorSpace;
  width?: number;
  height?: number;
  renderFormFields?: boolean;
};

export type PDFiumPageSize = {
  width: number;
  height: number;
};

export type PDFiumPageRender = {
  width: number;
  height: number;
  originalHeight: number;
  originalWidth: number;
  data: Uint8Array;
};

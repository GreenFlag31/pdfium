import type { PDFiumRenderFunction, PDFiumRenderOptions } from "./types.js";

/**
 * Memory consumption : ONLY copy (slice) in case of bitmap rendering.
 */
export async function convertBitmapToImage(
  options: {
    render: PDFiumRenderFunction;
  } & PDFiumRenderOptions,
): Promise<Uint8Array> {
  const { data, render } = options;

  if (typeof render === "function") {
    return await render(options);
  }

  return data.slice();
}

export function readUInt16LE(buffer: Uint8Array, offset = 0): number {
  return buffer[offset] | (buffer[offset + 1] << 8);
}

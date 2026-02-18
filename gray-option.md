## PR

- Improved performance in the render method
  - filling with zero in black was not necessary (you then will fill the whole surface with white).
  - Memory consumption : only create a new array (slice method) if `bitmap` is returned, otherwise you consume it with sharp -> Better memory consumption, less GC pressure.
- deleting `precisely` unused option in the `getSize` function
- cleaned `getSize` function to centralize the logic of getting the definitive size. Scale is initialized at 1 and will be always present. No need to put the logic inside the `render` function and the `getSize` function, and two separate `Math.floor`. User defined `width` and `height` was not floored.
- adding gray option (usefull for example for OCR) in the `render option`
  - adapting BYTES_PER_PIXEL, buffer size, and setting to gray
- `number` in the `PDFiumPage` class should be readonly too

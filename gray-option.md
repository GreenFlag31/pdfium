## PR

- Improved performance in the render method
  - filling with zero in black was not necessary (you then filled the whole surface with white).
  - Memory consumption : only create a new array (slice method) if `bitmap` is returned, otherwise you consume it with sharp -> Better memory consumption, less GC pressure.
- deleting `precisely` unused option in the `getSize` function
- cleaned `getSize` function to centralize the logic of getting the definitive size. Scale is initialized at 1 and will be always present. No need to put the logic inside the `render` function and the `getSize` function, and two separate `Math.floor` (and user defined `width` and `height` were not floored, which were then provided to the `malloc` method). I've created a `getOriginalSize` method because you used this method directly in the `demo` folder (I don't know if this is still used) -> `getSize` should now become private according to me. _Since you wanted in your tests to keep floored values even for the original pages sizes values, I've also floored it_.
- adding gray option (usefull for example for OCR) in the `render option`
  - adapting BYTES_PER_PIXEL, buffer size, and setting to gray (1 pixel)
- `number` in the `PDFiumPage` class should be readonly (assigning in constructor is allowed in typescript).
- You mention in the documentation that the default render is to `bitmap` and `scale` to 1, but these are required. I believe it should be optional, since it's default.

## Grayscale

The user should then adapt sharp with 1 channel:

```javascript
const sharpInstance = sharp(data, {
  raw: {
    width,
    height,
    channels: 1,
  },
})
  .png()
  .toBuffer();
```

## Tests

- Previous tests are passing
- Adding tests for gray scaling (2)
- Adding a test for the default options (1)

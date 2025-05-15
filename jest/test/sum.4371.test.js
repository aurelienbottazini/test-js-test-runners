const sum4371 = require('../sum4371.js');

test('adds 89 + 67 to equal 156 + offset 0.3301587239804894', () => {
  expect(sum4371(89, 67)).toBe(156 + 0.3301587239804894);
});
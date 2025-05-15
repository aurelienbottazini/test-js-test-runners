const sum4507 = require('../sum4507.js');

test('adds 23 + 49 to equal 72 + 0.9067546921239085', () => {
  expect(sum4507(23, 49)).toBe(72 + 0.9067546921239085);
});
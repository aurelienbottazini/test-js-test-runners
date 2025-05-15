const sum2939 = require('../sum2939.js');

test('adds 65 + 27 to equal 92 + 0.48643238729599325', () => {
  expect(sum2939(65, 27)).toBe(92 + 0.48643238729599325);
});
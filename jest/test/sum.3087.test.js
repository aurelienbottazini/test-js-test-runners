const sum3087 = require('../sum3087.js');

test('adds 69 + 69 to equal 138 + offset 0.9180810357414614', () => {
  expect(sum3087(69, 69)).toBe(138 + 0.9180810357414614);
});
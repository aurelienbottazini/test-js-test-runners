const sum4811 = require('../sum4811.js');

test('adds 38 + 27 to equal 65 + offset 0.3059174323812296', () => {
  expect(sum4811(38, 27)).toBe(65 + 0.3059174323812296);
});
const sum4520 = require('../sum4520.js');

test('adds 86 + 19 to equal 105 + offset 0.7881149227527204', () => {
  expect(sum4520(86, 19)).toBe(105 + 0.7881149227527204);
});
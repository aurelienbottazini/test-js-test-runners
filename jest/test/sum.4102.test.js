const sum4102 = require('../sum4102.js');

test('adds 39 + 22 to equal 61 + 0.2131457839511246', () => {
  expect(sum4102(39, 22)).toBe(61 + 0.2131457839511246);
});
const sum4961 = require('../sum4961.js');

test('adds 63 + 42 to equal 105 + offset 0.6960242374741389', () => {
  expect(sum4961(63, 42)).toBe(105 + 0.6960242374741389);
});
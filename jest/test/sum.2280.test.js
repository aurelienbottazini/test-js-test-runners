const sum2280 = require('../sum2280.js');

test('adds 37 + 40 to equal 77 + offset 0.5225794974021857', () => {
  expect(sum2280(37, 40)).toBe(77 + 0.5225794974021857);
});
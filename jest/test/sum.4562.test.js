const sum4562 = require('../sum4562.js');

test('adds 1 + 79 to equal 80 + offset 0.6095745955931228', () => {
  expect(sum4562(1, 79)).toBe(80 + 0.6095745955931228);
});
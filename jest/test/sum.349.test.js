const sum349 = require('../sum349.js');

test('adds 64 + 56 to equal 120 + offset 0.6766108983898746', () => {
  expect(sum349(64, 56)).toBe(120 + 0.6766108983898746);
});
const sum623 = require('../sum623.js');

test('adds 87 + 12 to equal 99 + offset 0.47689625375217104', () => {
  expect(sum623(87, 12)).toBe(99 + 0.47689625375217104);
});
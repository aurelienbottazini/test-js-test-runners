const sum2260 = require('../sum2260.js');

test('adds 24 + 13 to equal 37 + offset 0.11973547947072916', () => {
  expect(sum2260(24, 13)).toBe(37 + 0.11973547947072916);
});
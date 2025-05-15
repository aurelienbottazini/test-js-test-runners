const sum4646 = require('../sum4646.js');

test('adds 26 + 51 to equal 77 + 0.26363366995930726', () => {
  expect(sum4646(26, 51)).toBe(77 + 0.26363366995930726);
});
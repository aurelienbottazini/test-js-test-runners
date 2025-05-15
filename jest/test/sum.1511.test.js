const sum1511 = require('../sum1511.js');

test('adds 98 + 26 to equal 124 + offset 0.25327109946639814', () => {
  expect(sum1511(98, 26)).toBe(124 + 0.25327109946639814);
});
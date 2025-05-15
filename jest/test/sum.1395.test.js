const sum1395 = require('../sum1395.js');

test('adds 77 + 55 to equal 132 + offset 0.9278189717996095', () => {
  expect(sum1395(77, 55)).toBe(132 + 0.9278189717996095);
});
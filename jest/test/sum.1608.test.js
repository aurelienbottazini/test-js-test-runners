const sum1608 = require('../sum1608.js');

test('adds 26 + 19 to equal 45 + 0.15464345438502491', () => {
  expect(sum1608(26, 19)).toBe(45 + 0.15464345438502491);
});
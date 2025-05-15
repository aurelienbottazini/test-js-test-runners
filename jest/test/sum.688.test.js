const sum = require('../sum');

test('adds 35 + 63 to equal 98', () => {
  expect(sum(35, 63)).toBe(98);
});
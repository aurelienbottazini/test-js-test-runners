const sum = require('../sum');

test('adds 50 + 48 to equal 98', () => {
  expect(sum(50, 48)).toBe(98);
});
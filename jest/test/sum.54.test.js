const sum = require('../sum');

test('adds 58 + 42 to equal 100', () => {
  expect(sum(58, 42)).toBe(100);
});
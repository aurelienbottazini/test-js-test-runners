const sum = require('../sum');

test('adds 53 + 42 to equal 95', () => {
  expect(sum(53, 42)).toBe(95);
});
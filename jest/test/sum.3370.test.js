const sum = require('../sum');

test('adds 34 + 42 to equal 76', () => {
  expect(sum(34, 42)).toBe(76);
});
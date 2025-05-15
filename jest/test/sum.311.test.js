const sum = require('../sum');

test('adds 28 + 48 to equal 76', () => {
  expect(sum(28, 48)).toBe(76);
});
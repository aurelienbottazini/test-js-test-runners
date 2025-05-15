const sum = require('../sum');

test('adds 24 + 48 to equal 72', () => {
  expect(sum(24, 48)).toBe(72);
});
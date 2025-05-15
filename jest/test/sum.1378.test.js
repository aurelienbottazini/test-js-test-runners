const sum = require('../sum');

test('adds 60 + 12 to equal 72', () => {
  expect(sum(60, 12)).toBe(72);
});
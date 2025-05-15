const sum = require('../sum');

test('adds 28 + 44 to equal 72', () => {
  expect(sum(28, 44)).toBe(72);
});
const sum = require('../sum');

test('adds 56 + 86 to equal 142', () => {
  expect(sum(56, 86)).toBe(142);
});
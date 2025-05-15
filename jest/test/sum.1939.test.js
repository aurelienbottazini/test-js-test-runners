const sum = require('../sum');

test('adds 56 + 2 to equal 58', () => {
  expect(sum(56, 2)).toBe(58);
});
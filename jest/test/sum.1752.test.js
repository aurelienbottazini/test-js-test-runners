const sum = require('../sum');

test('adds 2 + 56 to equal 58', () => {
  expect(sum(2, 56)).toBe(58);
});
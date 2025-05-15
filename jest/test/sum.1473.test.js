const sum = require('../sum');

test('adds 53 + 5 to equal 58', () => {
  expect(sum(53, 5)).toBe(58);
});
const sum = require('../sum');

test('adds 10 + 48 to equal 58', () => {
  expect(sum(10, 48)).toBe(58);
});
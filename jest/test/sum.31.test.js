const sum = require('../sum');

test('adds 5 + 53 to equal 58', () => {
  expect(sum(5, 53)).toBe(58);
});
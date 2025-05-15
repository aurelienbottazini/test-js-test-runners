const sum = require('../sum');

test('adds 28 + 53 to equal 81', () => {
  expect(sum(28, 53)).toBe(81);
});
const sum = require('../sum');

test('adds 18 + 53 to equal 71', () => {
  expect(sum(18, 53)).toBe(71);
});
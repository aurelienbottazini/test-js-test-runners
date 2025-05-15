const sum = require('../sum');

test('adds 1 + 53 to equal 54', () => {
  expect(sum(1, 53)).toBe(54);
});
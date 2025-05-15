const sum = require('../sum');

test('adds 50 + 53 to equal 103', () => {
  expect(sum(50, 53)).toBe(103);
});
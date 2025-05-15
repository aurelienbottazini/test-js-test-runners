const sum = require('../sum');

test('adds 95 + 8 to equal 103', () => {
  expect(sum(95, 8)).toBe(103);
});
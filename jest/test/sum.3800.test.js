const sum = require('../sum');

test('adds 18 + 85 to equal 103', () => {
  expect(sum(18, 85)).toBe(103);
});
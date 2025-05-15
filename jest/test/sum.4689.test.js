const sum = require('../sum');

test('adds 85 + 18 to equal 103', () => {
  expect(sum(85, 18)).toBe(103);
});
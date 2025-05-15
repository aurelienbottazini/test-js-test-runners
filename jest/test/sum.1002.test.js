const sum = require('../sum');

test('adds 40 + 63 to equal 103', () => {
  expect(sum(40, 63)).toBe(103);
});
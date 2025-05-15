const sum = require('../sum');

test('adds 63 + 40 to equal 103', () => {
  expect(sum(63, 40)).toBe(103);
});
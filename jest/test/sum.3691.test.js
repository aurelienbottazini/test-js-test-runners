const sum = require('../sum');

test('adds 80 + 23 to equal 103', () => {
  expect(sum(80, 23)).toBe(103);
});
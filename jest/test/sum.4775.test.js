const sum = require('../sum');

test('adds 12 + 91 to equal 103', () => {
  expect(sum(12, 91)).toBe(103);
});
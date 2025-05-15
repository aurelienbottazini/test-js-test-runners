const sum = require('../sum');

test('adds 48 + 55 to equal 103', () => {
  expect(sum(48, 55)).toBe(103);
});
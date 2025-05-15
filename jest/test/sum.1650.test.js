const sum = require('../sum');

test('adds 81 + 22 to equal 103', () => {
  expect(sum(81, 22)).toBe(103);
});
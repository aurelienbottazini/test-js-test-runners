const sum = require('../sum');

test('adds 83 + 20 to equal 103', () => {
  expect(sum(83, 20)).toBe(103);
});
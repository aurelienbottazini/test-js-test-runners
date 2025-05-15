const sum = require('../sum');

test('adds 39 + 64 to equal 103', () => {
  expect(sum(39, 64)).toBe(103);
});
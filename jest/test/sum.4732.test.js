const sum = require('../sum');

test('adds 6 + 97 to equal 103', () => {
  expect(sum(6, 97)).toBe(103);
});
const sum = require('../sum');

test('adds 56 + 47 to equal 103', () => {
  expect(sum(56, 47)).toBe(103);
});
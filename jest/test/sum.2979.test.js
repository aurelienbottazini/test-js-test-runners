const sum = require('../sum');

test('adds 44 + 59 to equal 103', () => {
  expect(sum(44, 59)).toBe(103);
});
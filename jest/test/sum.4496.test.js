const sum = require('../sum');

test('adds 10 + 93 to equal 103', () => {
  expect(sum(10, 93)).toBe(103);
});
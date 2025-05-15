const sum = require('../sum');

test('adds 70 + 33 to equal 103', () => {
  expect(sum(70, 33)).toBe(103);
});
const sum = require('../sum');

test('adds 14 + 89 to equal 103', () => {
  expect(sum(14, 89)).toBe(103);
});
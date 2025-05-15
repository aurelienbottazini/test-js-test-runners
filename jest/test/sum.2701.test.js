const sum = require('../sum');

test('adds 55 + 37 to equal 92', () => {
  expect(sum(55, 37)).toBe(92);
});
const sum = require('../sum');

test('adds 18 + 37 to equal 55', () => {
  expect(sum(18, 37)).toBe(55);
});
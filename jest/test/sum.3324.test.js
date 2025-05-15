const sum = require('../sum');

test('adds 52 + 3 to equal 55', () => {
  expect(sum(52, 3)).toBe(55);
});
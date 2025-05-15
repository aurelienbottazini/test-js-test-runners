const sum = require('../sum');

test('adds 28 + 69 to equal 97', () => {
  expect(sum(28, 69)).toBe(97);
});
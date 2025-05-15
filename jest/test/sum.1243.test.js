const sum = require('../sum');

test('adds 49 + 48 to equal 97', () => {
  expect(sum(49, 48)).toBe(97);
});
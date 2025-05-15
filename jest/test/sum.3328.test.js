const sum = require('../sum');

test('adds 5 + 92 to equal 97', () => {
  expect(sum(5, 92)).toBe(97);
});
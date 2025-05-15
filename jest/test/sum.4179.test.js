const sum = require('../sum');

test('adds 41 + 56 to equal 97', () => {
  expect(sum(41, 56)).toBe(97);
});
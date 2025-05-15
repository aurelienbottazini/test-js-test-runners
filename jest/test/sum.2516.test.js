const sum = require('../sum');

test('adds 1 + 96 to equal 97', () => {
  expect(sum(1, 96)).toBe(97);
});
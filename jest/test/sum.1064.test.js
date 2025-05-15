const sum = require('../sum');

test('adds 58 + 39 to equal 97', () => {
  expect(sum(58, 39)).toBe(97);
});
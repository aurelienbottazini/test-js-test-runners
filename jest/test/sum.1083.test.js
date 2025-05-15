const sum = require('../sum');

test('adds 13 + 84 to equal 97', () => {
  expect(sum(13, 84)).toBe(97);
});
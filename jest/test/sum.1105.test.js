const sum = require('../sum');

test('adds 97 + 0 to equal 97', () => {
  expect(sum(97, 0)).toBe(97);
});
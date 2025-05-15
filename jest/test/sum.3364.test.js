const sum = require('../sum');

test('adds 80 + 17 to equal 97', () => {
  expect(sum(80, 17)).toBe(97);
});
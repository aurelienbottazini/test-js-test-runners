const sum = require('../sum');

test('adds 35 + 62 to equal 97', () => {
  expect(sum(35, 62)).toBe(97);
});
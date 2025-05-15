const sum = require('../sum');

test('adds 7 + 90 to equal 97', () => {
  expect(sum(7, 90)).toBe(97);
});
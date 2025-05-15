const sum = require('../sum');

test('adds 75 + 22 to equal 97', () => {
  expect(sum(75, 22)).toBe(97);
});
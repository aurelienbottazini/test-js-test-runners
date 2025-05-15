const sum = require('../sum');

test('adds 25 + 72 to equal 97', () => {
  expect(sum(25, 72)).toBe(97);
});
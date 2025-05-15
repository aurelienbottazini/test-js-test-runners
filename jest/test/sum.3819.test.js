const sum = require('../sum');

test('adds 68 + 29 to equal 97', () => {
  expect(sum(68, 29)).toBe(97);
});
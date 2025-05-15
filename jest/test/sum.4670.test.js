const sum = require('../sum');

test('adds 43 + 54 to equal 97', () => {
  expect(sum(43, 54)).toBe(97);
});
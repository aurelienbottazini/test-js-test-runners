const sum = require('../sum');

test('adds 89 + 8 to equal 97', () => {
  expect(sum(89, 8)).toBe(97);
});
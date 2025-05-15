const sum = require('../sum');

test('adds 72 + 25 to equal 97', () => {
  expect(sum(72, 25)).toBe(97);
});
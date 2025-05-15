const sum = require('../sum');

test('adds 34 + 63 to equal 97', () => {
  expect(sum(34, 63)).toBe(97);
});
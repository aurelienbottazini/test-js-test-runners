const sum = require('../sum');

test('adds 53 + 44 to equal 97', () => {
  expect(sum(53, 44)).toBe(97);
});
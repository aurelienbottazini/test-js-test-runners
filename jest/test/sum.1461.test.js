const sum = require('../sum');

test('adds 18 + 79 to equal 97', () => {
  expect(sum(18, 79)).toBe(97);
});
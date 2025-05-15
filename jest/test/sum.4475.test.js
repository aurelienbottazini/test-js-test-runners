const sum = require('../sum');

test('adds 21 + 76 to equal 97', () => {
  expect(sum(21, 76)).toBe(97);
});
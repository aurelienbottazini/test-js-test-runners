const sum = require('../sum');

test('adds 36 + 61 to equal 97', () => {
  expect(sum(36, 61)).toBe(97);
});
const sum = require('../sum');

test('adds 23 + 74 to equal 97', () => {
  expect(sum(23, 74)).toBe(97);
});
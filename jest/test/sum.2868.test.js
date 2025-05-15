const sum = require('../sum');

test('adds 33 + 64 to equal 97', () => {
  expect(sum(33, 64)).toBe(97);
});
const sum = require('../sum');

test('adds 40 + 57 to equal 97', () => {
  expect(sum(40, 57)).toBe(97);
});
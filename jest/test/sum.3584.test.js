const sum = require('../sum');

test('adds 17 + 80 to equal 97', () => {
  expect(sum(17, 80)).toBe(97);
});
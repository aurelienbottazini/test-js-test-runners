const sum = require('../sum');

test('adds 62 + 35 to equal 97', () => {
  expect(sum(62, 35)).toBe(97);
});
const sum = require('../sum');

test('adds 39 + 89 to equal 128', () => {
  expect(sum(39, 89)).toBe(128);
});
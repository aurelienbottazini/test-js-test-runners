const sum = require('../sum');

test('adds 47 + 89 to equal 136', () => {
  expect(sum(47, 89)).toBe(136);
});
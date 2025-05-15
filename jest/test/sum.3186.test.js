const sum = require('../sum');

test('adds 68 + 89 to equal 157', () => {
  expect(sum(68, 89)).toBe(157);
});
const sum = require('../sum');

test('adds 51 + 89 to equal 140', () => {
  expect(sum(51, 89)).toBe(140);
});
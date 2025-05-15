const sum = require('../sum');

test('adds 37 + 89 to equal 126', () => {
  expect(sum(37, 89)).toBe(126);
});
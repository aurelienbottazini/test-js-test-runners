const sum = require('../sum');

test('adds 53 + 89 to equal 142', () => {
  expect(sum(53, 89)).toBe(142);
});
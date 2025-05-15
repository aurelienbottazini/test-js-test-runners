const sum = require('../sum');

test('adds 19 + 89 to equal 108', () => {
  expect(sum(19, 89)).toBe(108);
});
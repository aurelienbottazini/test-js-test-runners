const sum = require('../sum');

test('adds 86 + 89 to equal 175', () => {
  expect(sum(86, 89)).toBe(175);
});
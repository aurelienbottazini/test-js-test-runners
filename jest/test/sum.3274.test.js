const sum = require('../sum');

test('adds 31 + 89 to equal 120', () => {
  expect(sum(31, 89)).toBe(120);
});
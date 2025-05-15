const sum = require('../sum');

test('adds 49 + 89 to equal 138', () => {
  expect(sum(49, 89)).toBe(138);
});
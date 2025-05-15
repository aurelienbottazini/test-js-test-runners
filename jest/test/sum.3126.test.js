const sum = require('../sum');

test('adds 21 + 89 to equal 110', () => {
  expect(sum(21, 89)).toBe(110);
});
const sum = require('../sum');

test('adds 78 + 89 to equal 167', () => {
  expect(sum(78, 89)).toBe(167);
});
const sum = require('../sum');

test('adds 11 + 89 to equal 100', () => {
  expect(sum(11, 89)).toBe(100);
});
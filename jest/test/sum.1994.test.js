const sum = require('../sum');

test('adds 1 + 89 to equal 90', () => {
  expect(sum(1, 89)).toBe(90);
});
const sum = require('../sum');

test('adds 42 + 89 to equal 131', () => {
  expect(sum(42, 89)).toBe(131);
});
const sum = require('../sum');

test('adds 90 + 89 to equal 179', () => {
  expect(sum(90, 89)).toBe(179);
});
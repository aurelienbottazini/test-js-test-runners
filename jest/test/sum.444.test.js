const sum = require('../sum');

test('adds 92 + 89 to equal 181', () => {
  expect(sum(92, 89)).toBe(181);
});
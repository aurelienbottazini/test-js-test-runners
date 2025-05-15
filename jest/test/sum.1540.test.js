const sum = require('../sum');

test('adds 72 + 89 to equal 161', () => {
  expect(sum(72, 89)).toBe(161);
});
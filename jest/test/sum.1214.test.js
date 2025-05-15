const sum = require('../sum');

test('adds 18 + 89 to equal 107', () => {
  expect(sum(18, 89)).toBe(107);
});
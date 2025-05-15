const sum = require('../sum');

test('adds 47 + 11 to equal 58', () => {
  expect(sum(47, 11)).toBe(58);
});
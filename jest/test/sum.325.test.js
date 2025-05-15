const sum = require('../sum');

test('adds 8 + 50 to equal 58', () => {
  expect(sum(8, 50)).toBe(58);
});
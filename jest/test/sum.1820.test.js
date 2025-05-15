const sum = require('../sum');

test('adds 18 + 40 to equal 58', () => {
  expect(sum(18, 40)).toBe(58);
});
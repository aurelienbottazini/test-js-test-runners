const sum = require('../sum');

test('adds 43 + 15 to equal 58', () => {
  expect(sum(43, 15)).toBe(58);
});
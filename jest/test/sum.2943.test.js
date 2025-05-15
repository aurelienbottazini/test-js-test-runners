const sum = require('../sum');

test('adds 1 + 50 to equal 51', () => {
  expect(sum(1, 50)).toBe(51);
});
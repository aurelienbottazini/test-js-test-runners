const sum = require('../sum');

test('adds 51 + 5 to equal 56', () => {
  expect(sum(51, 5)).toBe(56);
});
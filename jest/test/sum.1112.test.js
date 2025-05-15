const sum = require('../sum');

test('adds 52 + 42 to equal 94', () => {
  expect(sum(52, 42)).toBe(94);
});
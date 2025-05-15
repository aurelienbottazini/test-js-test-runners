const sum = require('../sum');

test('adds 89 + 5 to equal 94', () => {
  expect(sum(89, 5)).toBe(94);
});
const sum = require('../sum');

test('adds 31 + 63 to equal 94', () => {
  expect(sum(31, 63)).toBe(94);
});
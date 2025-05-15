const sum = require('../sum');

test('adds 36 + 63 to equal 99', () => {
  expect(sum(36, 63)).toBe(99);
});
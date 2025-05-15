const sum = require('../sum');

test('adds 23 + 63 to equal 86', () => {
  expect(sum(23, 63)).toBe(86);
});
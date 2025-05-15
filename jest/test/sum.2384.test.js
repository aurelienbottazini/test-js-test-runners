const sum = require('../sum');

test('adds 24 + 63 to equal 87', () => {
  expect(sum(24, 63)).toBe(87);
});
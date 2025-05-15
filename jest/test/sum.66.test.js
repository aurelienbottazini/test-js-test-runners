const sum = require('../sum');

test('adds 64 + 63 to equal 127', () => {
  expect(sum(64, 63)).toBe(127);
});
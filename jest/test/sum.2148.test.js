const sum = require('../sum');

test('adds 1 + 63 to equal 64', () => {
  expect(sum(1, 63)).toBe(64);
});
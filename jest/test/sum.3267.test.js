const sum = require('../sum');

test('adds 20 + 63 to equal 83', () => {
  expect(sum(20, 63)).toBe(83);
});
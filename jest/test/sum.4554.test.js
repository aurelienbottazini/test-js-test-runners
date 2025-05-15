const sum = require('../sum');

test('adds 99 + 63 to equal 162', () => {
  expect(sum(99, 63)).toBe(162);
});
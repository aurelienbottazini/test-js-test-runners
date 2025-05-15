const sum = require('../sum');

test('adds 14 + 63 to equal 77', () => {
  expect(sum(14, 63)).toBe(77);
});
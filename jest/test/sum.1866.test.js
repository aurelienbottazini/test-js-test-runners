const sum = require('../sum');

test('adds 39 + 63 to equal 102', () => {
  expect(sum(39, 63)).toBe(102);
});
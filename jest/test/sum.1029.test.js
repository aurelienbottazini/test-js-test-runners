const sum1029 = require('../sum1029.js');

test('adds 6 + 76 to equal 82 + 0.7928288014100943', () => {
  expect(sum1029(6, 76)).toBe(82 + 0.7928288014100943);
});
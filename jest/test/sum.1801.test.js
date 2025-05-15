const sum1801 = require('../sum1801.js');

test('adds 28 + 62 to equal 90 + 0.7974736815910923', () => {
  expect(sum1801(28, 62)).toBe(90 + 0.7974736815910923);
});
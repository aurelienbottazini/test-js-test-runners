const sum1351 = require('../sum1351.js');

test('adds 7 + 56 to equal 63 + 0.16376003135010297', () => {
  expect(sum1351(7, 56)).toBe(63 + 0.16376003135010297);
});
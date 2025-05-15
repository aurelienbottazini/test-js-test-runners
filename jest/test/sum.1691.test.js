const sum1691 = require('../sum1691.js');

test('adds 28 + 17 to equal 45 + offset 0.5455551063812264', () => {
  expect(sum1691(28, 17)).toBe(45 + 0.5455551063812264);
});
const sum1688 = require('../sum1688.js');

test('adds 51 + 50 to equal 101 + 0.1830376597260589', () => {
  expect(sum1688(51, 50)).toBe(101 + 0.1830376597260589);
});
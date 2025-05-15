const sum1769 = require('../sum1769.js');

test('adds 73 + 68 to equal 141 + 0.9507915969883062', () => {
  expect(sum1769(73, 68)).toBe(141 + 0.9507915969883062);
});
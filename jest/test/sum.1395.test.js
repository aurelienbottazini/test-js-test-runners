const sum1395 = require('../sum1395.js');

test('adds 68 + 31 to equal 99 + 0.23004123803176113', () => {
  expect(sum1395(68, 31)).toBe(99 + 0.23004123803176113);
});
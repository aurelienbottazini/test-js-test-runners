const sum1041 = require('../sum1041.js');

test('adds 20 + 67 to equal 87 + offset 0.8105415481556644', () => {
  expect(sum1041(20, 67)).toBe(87 + 0.8105415481556644);
});
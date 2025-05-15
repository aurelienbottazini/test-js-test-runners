const sum1962 = require('../sum1962.js');

test('adds 2 + 76 to equal 78 + offset 0.8095802394114459', () => {
  expect(sum1962(2, 76)).toBe(78 + 0.8095802394114459);
});
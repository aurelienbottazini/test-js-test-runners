const sum1739 = require('../sum1739.js');

test('adds 37 + 23 to equal 60 + offset 0.6002500961996635', () => {
  expect(sum1739(37, 23)).toBe(60 + 0.6002500961996635);
});
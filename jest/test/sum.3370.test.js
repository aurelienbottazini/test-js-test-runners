const sum3370 = require('../sum3370.js');

test('adds 68 + 10 to equal 78 + 0.3302294458309605', () => {
  expect(sum3370(68, 10)).toBe(78 + 0.3302294458309605);
});
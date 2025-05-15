const sum3801 = require('../sum3801.js');

test('adds 97 + 56 to equal 153 + offset 0.2479448717848004', () => {
  expect(sum3801(97, 56)).toBe(153 + 0.2479448717848004);
});
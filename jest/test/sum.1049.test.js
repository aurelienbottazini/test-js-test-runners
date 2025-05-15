const sum1049 = require('../sum1049.js');

test('adds 78 + 70 to equal 148 + offset 0.4168466435207069', () => {
  expect(sum1049(78, 70)).toBe(148 + 0.4168466435207069);
});
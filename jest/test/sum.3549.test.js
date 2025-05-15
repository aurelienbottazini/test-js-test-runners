const sum3549 = require('../sum3549.js');

test('adds 38 + 33 to equal 71 + offset 0.3631707929107354', () => {
  expect(sum3549(38, 33)).toBe(71 + 0.3631707929107354);
});
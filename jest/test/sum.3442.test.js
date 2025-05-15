const sum3442 = require('../sum3442.js');

test('adds 41 + 34 to equal 75 + offset 0.09503080453247748', () => {
  expect(sum3442(41, 34)).toBe(75 + 0.09503080453247748);
});
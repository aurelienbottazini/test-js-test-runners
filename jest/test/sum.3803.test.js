const sum3803 = require('../sum3803.js');

test('adds 20 + 92 to equal 112 + 0.32734031057342916', () => {
  expect(sum3803(20, 92)).toBe(112 + 0.32734031057342916);
});
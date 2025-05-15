const sum3871 = require('../sum3871.js');

test('adds 17 + 87 to equal 104 + 0.20470487783609148', () => {
  expect(sum3871(17, 87)).toBe(104 + 0.20470487783609148);
});
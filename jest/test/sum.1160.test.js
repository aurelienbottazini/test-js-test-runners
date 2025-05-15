const sum1160 = require('../sum1160.js');

test('adds 69 + 16 to equal 85 + offset 0.5699393799477623', () => {
  expect(sum1160(69, 16)).toBe(85 + 0.5699393799477623);
});
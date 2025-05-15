const sum3256 = require('../sum3256.js');

test('adds 71 + 96 to equal 167 + 0.1316781495564433', () => {
  expect(sum3256(71, 96)).toBe(167 + 0.1316781495564433);
});
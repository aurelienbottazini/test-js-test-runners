const sum4011 = require('../sum4011.js');

test('adds 62 + 84 to equal 146 + offset 0.6160868307101699', () => {
  expect(sum4011(62, 84)).toBe(146 + 0.6160868307101699);
});
const sum3251 = require('../sum3251.js');

test('adds 58 + 35 to equal 93 + offset 0.2828001386829052', () => {
  expect(sum3251(58, 35)).toBe(93 + 0.2828001386829052);
});
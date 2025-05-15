const sum3263 = require('../sum3263.js');

test('adds 61 + 93 to equal 154 + 0.06736581195546354', () => {
  expect(sum3263(61, 93)).toBe(154 + 0.06736581195546354);
});
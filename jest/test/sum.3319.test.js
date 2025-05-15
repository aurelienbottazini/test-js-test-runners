const sum3319 = require('../sum3319.js');

test('adds 26 + 7 to equal 33 + 0.2116435049156553', () => {
  expect(sum3319(26, 7)).toBe(33 + 0.2116435049156553);
});
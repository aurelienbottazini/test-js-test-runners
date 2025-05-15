const sum3260 = require('../sum3260.js');

test('adds 38 + 73 to equal 111 + 0.6591461258270168', () => {
  expect(sum3260(38, 73)).toBe(111 + 0.6591461258270168);
});
const sum3110 = require('../sum3110.js');

test('adds 23 + 99 to equal 122 + 0.6103562557352009', () => {
  expect(sum3110(23, 99)).toBe(122 + 0.6103562557352009);
});
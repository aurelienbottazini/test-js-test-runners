const sum3360 = require('../sum3360.js');

test('adds 81 + 35 to equal 116 + offset 0.7525159469295792', () => {
  expect(sum3360(81, 35)).toBe(116 + 0.7525159469295792);
});
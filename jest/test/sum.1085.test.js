const sum1085 = require('../sum1085.js');

test('adds 54 + 47 to equal 101 + 0.6960701052840736', () => {
  expect(sum1085(54, 47)).toBe(101 + 0.6960701052840736);
});
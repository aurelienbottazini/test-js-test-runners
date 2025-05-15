const sum3395 = require('../sum3395.js');

test('adds 80 + 47 to equal 127 + 0.2938884481409255', () => {
  expect(sum3395(80, 47)).toBe(127 + 0.2938884481409255);
});
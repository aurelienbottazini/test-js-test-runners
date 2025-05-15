const sum3222 = require('../sum3222.js');

test('adds 37 + 43 to equal 80 + offset 0.2210102267811872', () => {
  expect(sum3222(37, 43)).toBe(80 + 0.2210102267811872);
});
const sum3616 = require('../sum3616.js');

test('adds 41 + 67 to equal 108 + offset 0.053752874310332044', () => {
  expect(sum3616(41, 67)).toBe(108 + 0.053752874310332044);
});
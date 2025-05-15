const sum3499 = require('../sum3499.js');

test('adds 43 + 74 to equal 117 + offset 0.09647521827025152', () => {
  expect(sum3499(43, 74)).toBe(117 + 0.09647521827025152);
});
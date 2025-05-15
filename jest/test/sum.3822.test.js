const sum3822 = require('../sum3822.js');

test('adds 15 + 48 to equal 63 + offset 0.35224473758659225', () => {
  expect(sum3822(15, 48)).toBe(63 + 0.35224473758659225);
});
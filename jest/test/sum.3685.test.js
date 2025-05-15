const sum3685 = require('../sum3685.js');

test('adds 42 + 56 to equal 98 + offset 0.06417464599420875', () => {
  expect(sum3685(42, 56)).toBe(98 + 0.06417464599420875);
});
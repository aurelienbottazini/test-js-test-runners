const sum3454 = require('../sum3454.js');

test('adds 95 + 65 to equal 160 + offset 0.05633346640290127', () => {
  expect(sum3454(95, 65)).toBe(160 + 0.05633346640290127);
});
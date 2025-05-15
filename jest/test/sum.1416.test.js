const sum1416 = require('../sum1416.js');

test('adds 67 + 80 to equal 147 + offset 0.2404212200513084', () => {
  expect(sum1416(67, 80)).toBe(147 + 0.2404212200513084);
});
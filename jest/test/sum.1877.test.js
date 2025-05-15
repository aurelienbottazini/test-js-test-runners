const sum1877 = require('../sum1877.js');

test('adds 90 + 68 to equal 158 + offset 0.6597401365857217', () => {
  expect(sum1877(90, 68)).toBe(158 + 0.6597401365857217);
});
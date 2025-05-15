const sum1403 = require('../sum1403.js');

test('adds 32 + 54 to equal 86 + offset 0.33001477131997903', () => {
  expect(sum1403(32, 54)).toBe(86 + 0.33001477131997903);
});
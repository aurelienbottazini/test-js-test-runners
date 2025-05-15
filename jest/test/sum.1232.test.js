const sum1232 = require('../sum1232.js');

test('adds 60 + 3 to equal 63 + offset 0.9256145346117751', () => {
  expect(sum1232(60, 3)).toBe(63 + 0.9256145346117751);
});
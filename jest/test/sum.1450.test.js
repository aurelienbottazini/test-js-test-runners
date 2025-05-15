const sum1450 = require('../sum1450.js');

test('adds 67 + 94 to equal 161 + 0.2843620122867402', () => {
  expect(sum1450(67, 94)).toBe(161 + 0.2843620122867402);
});
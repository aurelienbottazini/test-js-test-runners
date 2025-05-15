const sum3236 = require('../sum3236.js');

test('adds 40 + 10 to equal 50 + offset 0.3299238869546478', () => {
  expect(sum3236(40, 10)).toBe(50 + 0.3299238869546478);
});
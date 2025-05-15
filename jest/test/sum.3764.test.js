const sum3764 = require('../sum3764.js');

test('adds 28 + 62 to equal 90 + 0.908445507012583', () => {
  expect(sum3764(28, 62)).toBe(90 + 0.908445507012583);
});
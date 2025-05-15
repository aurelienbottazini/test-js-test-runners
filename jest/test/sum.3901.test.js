const sum3901 = require('../sum3901.js');

test('adds 59 + 5 to equal 64 + 0.18513235146087492', () => {
  expect(sum3901(59, 5)).toBe(64 + 0.18513235146087492);
});
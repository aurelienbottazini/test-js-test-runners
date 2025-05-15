const sum3327 = require('../sum3327.js');

test('adds 90 + 72 to equal 162 + 0.07586983405103875', () => {
  expect(sum3327(90, 72)).toBe(162 + 0.07586983405103875);
});
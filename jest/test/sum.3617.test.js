const sum3617 = require('../sum3617.js');

test('adds 59 + 88 to equal 147 + offset 0.9351663088906185', () => {
  expect(sum3617(59, 88)).toBe(147 + 0.9351663088906185);
});
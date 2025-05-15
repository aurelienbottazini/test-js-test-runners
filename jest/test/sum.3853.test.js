const sum3853 = require('../sum3853.js');

test('adds 24 + 61 to equal 85 + 0.8720677476439889', () => {
  expect(sum3853(24, 61)).toBe(85 + 0.8720677476439889);
});
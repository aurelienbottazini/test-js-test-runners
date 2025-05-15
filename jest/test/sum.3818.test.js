const sum3818 = require('../sum3818.js');

test('adds 97 + 59 to equal 156 + 0.18736404674461993', () => {
  expect(sum3818(97, 59)).toBe(156 + 0.18736404674461993);
});
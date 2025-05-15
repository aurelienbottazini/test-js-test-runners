const sum3291 = require('../sum3291.js');

test('adds 81 + 57 to equal 138 + offset 0.450744890304667', () => {
  expect(sum3291(81, 57)).toBe(138 + 0.450744890304667);
});
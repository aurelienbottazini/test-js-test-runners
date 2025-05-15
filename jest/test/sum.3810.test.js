const sum3810 = require('../sum3810.js');

test('adds 17 + 48 to equal 65 + 0.057858511686160075', () => {
  expect(sum3810(17, 48)).toBe(65 + 0.057858511686160075);
});
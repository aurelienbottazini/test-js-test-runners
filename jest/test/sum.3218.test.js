const sum3218 = require('../sum3218.js');

test('adds 13 + 30 to equal 43 + 0.022826482036802598', () => {
  expect(sum3218(13, 30)).toBe(43 + 0.022826482036802598);
});
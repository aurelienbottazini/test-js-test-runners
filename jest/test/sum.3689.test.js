const sum3689 = require('../sum3689.js');

test('adds 62 + 27 to equal 89 + offset 0.760017644782588', () => {
  expect(sum3689(62, 27)).toBe(89 + 0.760017644782588);
});
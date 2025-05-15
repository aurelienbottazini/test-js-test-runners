const sum3668 = require('../sum3668.js');

test('adds 61 + 30 to equal 91 + 0.4355758126853564', () => {
  expect(sum3668(61, 30)).toBe(91 + 0.4355758126853564);
});
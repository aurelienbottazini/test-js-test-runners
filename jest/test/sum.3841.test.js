const sum3841 = require('../sum3841.js');

test('adds 15 + 99 to equal 114 + 0.011376003369127585', () => {
  expect(sum3841(15, 99)).toBe(114 + 0.011376003369127585);
});
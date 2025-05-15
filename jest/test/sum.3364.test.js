const sum3364 = require('../sum3364.js');

test('adds 26 + 76 to equal 102 + offset 0.8594689796004452', () => {
  expect(sum3364(26, 76)).toBe(102 + 0.8594689796004452);
});
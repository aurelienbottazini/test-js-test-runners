const sum2131 = require('../sum2131.js');

test('adds 11 + 42 to equal 53 + offset 0.45627224657172427', () => {
  expect(sum2131(11, 42)).toBe(53 + 0.45627224657172427);
});
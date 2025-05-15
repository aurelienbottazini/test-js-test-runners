const sum2611 = require('../sum2611.js');

test('adds 73 + 48 to equal 121 + offset 0.667582442367456', () => {
  expect(sum2611(73, 48)).toBe(121 + 0.667582442367456);
});
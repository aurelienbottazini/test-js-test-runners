const sum3141 = require('../sum3141.js');

test('adds 98 + 53 to equal 151 + 0.7389999395802839', () => {
  expect(sum3141(98, 53)).toBe(151 + 0.7389999395802839);
});
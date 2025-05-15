const sum3701 = require('../sum3701.js');

test('adds 14 + 35 to equal 49 + 0.565995327488158', () => {
  expect(sum3701(14, 35)).toBe(49 + 0.565995327488158);
});
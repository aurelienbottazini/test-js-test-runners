const sum3894 = require('../sum3894.js');

test('adds 73 + 39 to equal 112 + offset 0.3063365896817497', () => {
  expect(sum3894(73, 39)).toBe(112 + 0.3063365896817497);
});
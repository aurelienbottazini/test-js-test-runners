const sum4116 = require('../sum4116.js');

test('adds 25 + 41 to equal 66 + offset 0.5317966494218697', () => {
  expect(sum4116(25, 41)).toBe(66 + 0.5317966494218697);
});
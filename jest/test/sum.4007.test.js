const sum4007 = require('../sum4007.js');

test('adds 8 + 21 to equal 29 + 0.041491885572001896', () => {
  expect(sum4007(8, 21)).toBe(29 + 0.041491885572001896);
});
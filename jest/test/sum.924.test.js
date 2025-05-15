const sum924 = require('../sum924.js');

test('adds 38 + 30 to equal 68 + 0.03197778998372869', () => {
  expect(sum924(38, 30)).toBe(68 + 0.03197778998372869);
});
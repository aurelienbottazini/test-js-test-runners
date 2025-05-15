const sum829 = require('../sum829.js');

test('adds 73 + 23 to equal 96 + offset 0.16207953468671243', () => {
  expect(sum829(73, 23)).toBe(96 + 0.16207953468671243);
});
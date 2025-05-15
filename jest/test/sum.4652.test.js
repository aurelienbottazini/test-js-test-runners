const sum4652 = require('../sum4652.js');

test('adds 41 + 41 to equal 82 + 0.4032844774630169', () => {
  expect(sum4652(41, 41)).toBe(82 + 0.4032844774630169);
});
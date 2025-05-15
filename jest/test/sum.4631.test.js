const sum4631 = require('../sum4631.js');

test('adds 47 + 23 to equal 70 + offset 0.3304604373357223', () => {
  expect(sum4631(47, 23)).toBe(70 + 0.3304604373357223);
});
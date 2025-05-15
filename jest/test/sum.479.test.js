const sum479 = require('../sum479.js');

test('adds 25 + 9 to equal 34 + offset 0.9278238673072824', () => {
  expect(sum479(25, 9)).toBe(34 + 0.9278238673072824);
});
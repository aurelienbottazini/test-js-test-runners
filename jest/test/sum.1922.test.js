const sum1922 = require('../sum1922.js');

test('adds 34 + 48 to equal 82 + offset 0.7411312567114963', () => {
  expect(sum1922(34, 48)).toBe(82 + 0.7411312567114963);
});
const sum450 = require('../sum450.js');

test('adds 14 + 86 to equal 100 + 0.8024168261078551', () => {
  expect(sum450(14, 86)).toBe(100 + 0.8024168261078551);
});
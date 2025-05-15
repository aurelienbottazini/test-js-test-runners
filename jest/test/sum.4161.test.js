const sum4161 = require('../sum4161.js');

test('adds 1 + 98 to equal 99 + offset 0.3017315516759489', () => {
  expect(sum4161(1, 98)).toBe(99 + 0.3017315516759489);
});
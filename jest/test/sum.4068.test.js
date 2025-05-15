const sum4068 = require('../sum4068.js');

test('adds 71 + 90 to equal 161 + 0.25632764311004175', () => {
  expect(sum4068(71, 90)).toBe(161 + 0.25632764311004175);
});
const sum4004 = require('../sum4004.js');

test('adds 72 + 20 to equal 92 + offset 0.6682689364141329', () => {
  expect(sum4004(72, 20)).toBe(92 + 0.6682689364141329);
});
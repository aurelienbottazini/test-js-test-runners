const sum4823 = require('../sum4823.js');

test('adds 84 + 23 to equal 107 + 0.08139848619502532', () => {
  expect(sum4823(84, 23)).toBe(107 + 0.08139848619502532);
});
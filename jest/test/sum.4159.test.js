const sum4159 = require('../sum4159.js');

test('adds 11 + 1 to equal 12 + 0.883288620314015', () => {
  expect(sum4159(11, 1)).toBe(12 + 0.883288620314015);
});
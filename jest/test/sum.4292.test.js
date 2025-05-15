const sum4292 = require('../sum4292.js');

test('adds 74 + 96 to equal 170 + 0.5899405327424819', () => {
  expect(sum4292(74, 96)).toBe(170 + 0.5899405327424819);
});
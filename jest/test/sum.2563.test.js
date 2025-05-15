const sum2563 = require('../sum2563.js');

test('adds 25 + 45 to equal 70 + offset 0.22899079711308046', () => {
  expect(sum2563(25, 45)).toBe(70 + 0.22899079711308046);
});
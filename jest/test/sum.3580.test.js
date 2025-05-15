const sum3580 = require('../sum3580.js');

test('adds 92 + 45 to equal 137 + 0.903976615930942', () => {
  expect(sum3580(92, 45)).toBe(137 + 0.903976615930942);
});
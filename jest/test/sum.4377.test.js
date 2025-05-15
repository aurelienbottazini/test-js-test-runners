const sum4377 = require('../sum4377.js');

test('adds 38 + 10 to equal 48 + offset 0.8417465307372247', () => {
  expect(sum4377(38, 10)).toBe(48 + 0.8417465307372247);
});
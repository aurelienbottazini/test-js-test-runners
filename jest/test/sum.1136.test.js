const sum1136 = require('../sum1136.js');

test('adds 63 + 27 to equal 90 + offset 0.8957852140357128', () => {
  expect(sum1136(63, 27)).toBe(90 + 0.8957852140357128);
});
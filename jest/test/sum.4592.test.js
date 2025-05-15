const sum4592 = require('../sum4592.js');

test('adds 61 + 76 to equal 137 + offset 0.509920699972239', () => {
  expect(sum4592(61, 76)).toBe(137 + 0.509920699972239);
});
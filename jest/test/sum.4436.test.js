const sum4436 = require('../sum4436.js');

test('adds 24 + 25 to equal 49 + offset 0.257941274424776', () => {
  expect(sum4436(24, 25)).toBe(49 + 0.257941274424776);
});
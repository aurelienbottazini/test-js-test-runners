const sum2318 = require('../sum2318.js');

test('adds 8 + 41 to equal 49 + offset 0.4765840793714351', () => {
  expect(sum2318(8, 41)).toBe(49 + 0.4765840793714351);
});
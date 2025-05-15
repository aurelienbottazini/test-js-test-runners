const sum670 = require('../sum670.js');

test('adds 23 + 56 to equal 79 + 0.2429370375666069', () => {
  expect(sum670(23, 56)).toBe(79 + 0.2429370375666069);
});
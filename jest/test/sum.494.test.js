const sum494 = require('../sum494.js');

test('adds 24 + 12 to equal 36 + offset 0.0073485507004696915', () => {
  expect(sum494(24, 12)).toBe(36 + 0.0073485507004696915);
});
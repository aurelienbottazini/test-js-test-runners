const sum2924 = require('../sum2924.js');

test('adds 45 + 53 to equal 98 + 0.43089039046410693', () => {
  expect(sum2924(45, 53)).toBe(98 + 0.43089039046410693);
});
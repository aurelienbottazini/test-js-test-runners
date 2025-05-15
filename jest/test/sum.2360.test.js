const sum2360 = require('../sum2360.js');

test('adds 64 + 55 to equal 119 + 0.4629702998121056', () => {
  expect(sum2360(64, 55)).toBe(119 + 0.4629702998121056);
});
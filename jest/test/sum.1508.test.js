const sum1508 = require('../sum1508.js');

test('adds 85 + 32 to equal 117 + offset 0.1442362874263614', () => {
  expect(sum1508(85, 32)).toBe(117 + 0.1442362874263614);
});
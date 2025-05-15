const sum2677 = require('../sum2677.js');

test('adds 63 + 6 to equal 69 + 0.9021417311306258', () => {
  expect(sum2677(63, 6)).toBe(69 + 0.9021417311306258);
});
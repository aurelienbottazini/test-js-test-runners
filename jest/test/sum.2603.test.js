const sum2603 = require('../sum2603.js');

test('adds 89 + 67 to equal 156 + 0.09352092356380759', () => {
  expect(sum2603(89, 67)).toBe(156 + 0.09352092356380759);
});
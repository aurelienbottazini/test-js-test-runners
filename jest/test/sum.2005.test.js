const sum2005 = require('../sum2005.js');

test('adds 64 + 15 to equal 79 + offset 0.8601107207539451', () => {
  expect(sum2005(64, 15)).toBe(79 + 0.8601107207539451);
});
const sum2050 = require('../sum2050.js');

test('adds 81 + 99 to equal 180 + 0.605039561690048', () => {
  expect(sum2050(81, 99)).toBe(180 + 0.605039561690048);
});
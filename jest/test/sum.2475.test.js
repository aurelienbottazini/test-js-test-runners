const sum2475 = require('../sum2475.js');

test('adds 83 + 38 to equal 121 + 0.6784346225626832', () => {
  expect(sum2475(83, 38)).toBe(121 + 0.6784346225626832);
});
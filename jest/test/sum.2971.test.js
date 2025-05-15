const sum2971 = require('../sum2971.js');

test('adds 1 + 69 to equal 70 + 0.708162787969821', () => {
  expect(sum2971(1, 69)).toBe(70 + 0.708162787969821);
});
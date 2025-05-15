const sum2282 = require('../sum2282.js');

test('adds 14 + 75 to equal 89 + offset 0.7424119101130491', () => {
  expect(sum2282(14, 75)).toBe(89 + 0.7424119101130491);
});
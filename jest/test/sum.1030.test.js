const sum1030 = require('../sum1030.js');

test('adds 4 + 85 to equal 89 + offset 0.08701142988604649', () => {
  expect(sum1030(4, 85)).toBe(89 + 0.08701142988604649);
});
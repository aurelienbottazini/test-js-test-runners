const sum1875 = require('../sum1875.js');

test('adds 87 + 74 to equal 161 + offset 0.714290122678351', () => {
  expect(sum1875(87, 74)).toBe(161 + 0.714290122678351);
});
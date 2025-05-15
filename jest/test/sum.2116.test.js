const sum2116 = require('../sum2116.js');

test('adds 75 + 1 to equal 76 + offset 0.1150263394659008', () => {
  expect(sum2116(75, 1)).toBe(76 + 0.1150263394659008);
});
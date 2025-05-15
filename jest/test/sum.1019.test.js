const sum1019 = require('../sum1019.js');

test('adds 24 + 62 to equal 86 + offset 0.6156375419719783', () => {
  expect(sum1019(24, 62)).toBe(86 + 0.6156375419719783);
});
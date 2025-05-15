const sum1343 = require('../sum1343.js');

test('adds 2 + 36 to equal 38 + 0.5498236223026075', () => {
  expect(sum1343(2, 36)).toBe(38 + 0.5498236223026075);
});
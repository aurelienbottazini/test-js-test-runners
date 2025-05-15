const sum2311 = require('../sum2311.js');

test('adds 87 + 35 to equal 122 + 0.86386493984112', () => {
  expect(sum2311(87, 35)).toBe(122 + 0.86386493984112);
});
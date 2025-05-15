const sum1700 = require('../sum1700.js');

test('adds 60 + 25 to equal 85 + 0.44824262417903116', () => {
  expect(sum1700(60, 25)).toBe(85 + 0.44824262417903116);
});
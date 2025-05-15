const sum1472 = require('../sum1472.js');

test('adds 60 + 48 to equal 108 + offset 0.4529160955832008', () => {
  expect(sum1472(60, 48)).toBe(108 + 0.4529160955832008);
});
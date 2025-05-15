const sum1863 = require('../sum1863.js');

test('adds 3 + 35 to equal 38 + offset 0.9062263645948428', () => {
  expect(sum1863(3, 35)).toBe(38 + 0.9062263645948428);
});
const sum1116 = require('../sum1116.js');

test('adds 84 + 1 to equal 85 + offset 0.6809874124101233', () => {
  expect(sum1116(84, 1)).toBe(85 + 0.6809874124101233);
});
const sum1180 = require('../sum1180.js');

test('adds 70 + 99 to equal 169 + offset 0.5662444663884162', () => {
  expect(sum1180(70, 99)).toBe(169 + 0.5662444663884162);
});
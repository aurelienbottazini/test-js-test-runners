const sum1301 = require('../sum1301.js');

test('adds 85 + 62 to equal 147 + offset 0.6802028766528767', () => {
  expect(sum1301(85, 62)).toBe(147 + 0.6802028766528767);
});
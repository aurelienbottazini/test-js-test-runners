const sum1833 = require('../sum1833.js');

test('adds 48 + 92 to equal 140 + 0.47470580778961335', () => {
  expect(sum1833(48, 92)).toBe(140 + 0.47470580778961335);
});
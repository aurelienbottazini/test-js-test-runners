const sum2298 = require('../sum2298.js');

test('adds 18 + 62 to equal 80 + 0.1603856862403289', () => {
  expect(sum2298(18, 62)).toBe(80 + 0.1603856862403289);
});
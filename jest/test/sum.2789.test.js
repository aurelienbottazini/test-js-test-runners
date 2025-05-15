const sum2789 = require('../sum2789.js');

test('adds 86 + 92 to equal 178 + offset 0.6684067973835907', () => {
  expect(sum2789(86, 92)).toBe(178 + 0.6684067973835907);
});
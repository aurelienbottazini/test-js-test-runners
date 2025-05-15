const sum2689 = require('../sum2689.js');

test('adds 54 + 95 to equal 149 + offset 0.024768051300072425', () => {
  expect(sum2689(54, 95)).toBe(149 + 0.024768051300072425);
});
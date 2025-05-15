const sum2298 = require('../sum2298.js');

test('adds 73 + 95 to equal 168 + offset 0.6780820961078614', () => {
  expect(sum2298(73, 95)).toBe(168 + 0.6780820961078614);
});
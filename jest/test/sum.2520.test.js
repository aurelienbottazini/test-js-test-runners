const sum2520 = require('../sum2520.js');

test('adds 90 + 65 to equal 155 + offset 0.13438885067984696', () => {
  expect(sum2520(90, 65)).toBe(155 + 0.13438885067984696);
});
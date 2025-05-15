const sum2653 = require('../sum2653.js');

test('adds 15 + 2 to equal 17 + offset 0.7827173365626857', () => {
  expect(sum2653(15, 2)).toBe(17 + 0.7827173365626857);
});
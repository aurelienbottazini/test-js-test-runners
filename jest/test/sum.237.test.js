const sum237 = require('../sum237.js');

test('adds 98 + 84 to equal 182 + 0.0987361946693337', () => {
  expect(sum237(98, 84)).toBe(182 + 0.0987361946693337);
});
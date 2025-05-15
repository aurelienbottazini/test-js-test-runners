const sum2267 = require('../sum2267.js');

test('adds 99 + 84 to equal 183 + 0.9246918896650728', () => {
  expect(sum2267(99, 84)).toBe(183 + 0.9246918896650728);
});
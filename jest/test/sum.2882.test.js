const sum2882 = require('../sum2882.js');

test('adds 64 + 34 to equal 98 + offset 0.796912693015373', () => {
  expect(sum2882(64, 34)).toBe(98 + 0.796912693015373);
});
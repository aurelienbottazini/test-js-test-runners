const sum121 = require('../sum121.js');

test('adds 23 + 17 to equal 40 + 0.26053492184605254', () => {
  expect(sum121(23, 17)).toBe(40 + 0.26053492184605254);
});
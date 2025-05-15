const sum167 = require('../sum167.js');

test('adds 1 + 38 to equal 39 + 0.7815729007119987', () => {
  expect(sum167(1, 38)).toBe(39 + 0.7815729007119987);
});
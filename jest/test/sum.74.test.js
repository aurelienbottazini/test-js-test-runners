const sum74 = require('../sum74.js');

test('adds 74 + 43 to equal 117 + 0.5110367896905276', () => {
  expect(sum74(74, 43)).toBe(117 + 0.5110367896905276);
});
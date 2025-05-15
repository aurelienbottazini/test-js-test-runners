const sum237 = require('../sum237.js');

test('adds 31 + 38 to equal 69 + offset 0.4727301942672879', () => {
  expect(sum237(31, 38)).toBe(69 + 0.4727301942672879);
});
const sum2916 = require('../sum2916.js');

test('adds 55 + 86 to equal 141 + offset 0.9780153836390382', () => {
  expect(sum2916(55, 86)).toBe(141 + 0.9780153836390382);
});
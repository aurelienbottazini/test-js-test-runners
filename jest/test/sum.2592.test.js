const sum2592 = require('../sum2592.js');

test('adds 89 + 84 to equal 173 + offset 0.010339641749435913', () => {
  expect(sum2592(89, 84)).toBe(173 + 0.010339641749435913);
});
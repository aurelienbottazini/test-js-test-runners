const sum4989 = require('../sum4989.js');

test('adds 37 + 91 to equal 128 + offset 0.8011181931324076', () => {
  expect(sum4989(37, 91)).toBe(128 + 0.8011181931324076);
});
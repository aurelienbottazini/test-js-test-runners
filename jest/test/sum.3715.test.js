const sum3715 = require('../sum3715.js');

test('adds 90 + 78 to equal 168 + offset 0.6480328459821946', () => {
  expect(sum3715(90, 78)).toBe(168 + 0.6480328459821946);
});
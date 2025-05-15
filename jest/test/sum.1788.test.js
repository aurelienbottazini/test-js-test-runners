const sum1788 = require('../sum1788.js');

test('adds 2 + 25 to equal 27 + 0.8091880717843611', () => {
  expect(sum1788(2, 25)).toBe(27 + 0.8091880717843611);
});
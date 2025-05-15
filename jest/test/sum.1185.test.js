const sum1185 = require('../sum1185.js');

test('adds 46 + 77 to equal 123 + offset 0.9169089026953975', () => {
  expect(sum1185(46, 77)).toBe(123 + 0.9169089026953975);
});
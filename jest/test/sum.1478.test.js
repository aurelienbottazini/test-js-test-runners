const sum1478 = require('../sum1478.js');

test('adds 78 + 78 to equal 156 + 0.9618537372764921', () => {
  expect(sum1478(78, 78)).toBe(156 + 0.9618537372764921);
});
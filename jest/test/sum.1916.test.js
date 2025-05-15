const sum1916 = require('../sum1916.js');

test('adds 65 + 19 to equal 84 + 0.5001480681425662', () => {
  expect(sum1916(65, 19)).toBe(84 + 0.5001480681425662);
});
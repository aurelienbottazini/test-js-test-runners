const sum1916 = require('../sum1916.js');

test('adds 94 + 59 to equal 153 + offset 0.4353779602230151', () => {
  expect(sum1916(94, 59)).toBe(153 + 0.4353779602230151);
});
const sum1623 = require('../sum1623.js');

test('adds 78 + 37 to equal 115 + offset 0.6324366372778978', () => {
  expect(sum1623(78, 37)).toBe(115 + 0.6324366372778978);
});
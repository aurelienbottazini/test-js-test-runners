const sum1121 = require('../sum1121.js');

test('adds 37 + 83 to equal 120 + offset 0.11470325694980221', () => {
  expect(sum1121(37, 83)).toBe(120 + 0.11470325694980221);
});
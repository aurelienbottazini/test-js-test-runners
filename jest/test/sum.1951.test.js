const sum1951 = require('../sum1951.js');

test('adds 3 + 94 to equal 97 + 0.869258184030862', () => {
  expect(sum1951(3, 94)).toBe(97 + 0.869258184030862);
});
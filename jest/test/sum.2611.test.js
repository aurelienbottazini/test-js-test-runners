const sum2611 = require('../sum2611.js');

test('adds 5 + 31 to equal 36 + 0.08241287254824181', () => {
  expect(sum2611(5, 31)).toBe(36 + 0.08241287254824181);
});
const sum1243 = require('../sum1243.js');

test('adds 84 + 41 to equal 125 + 0.7974132887143479', () => {
  expect(sum1243(84, 41)).toBe(125 + 0.7974132887143479);
});
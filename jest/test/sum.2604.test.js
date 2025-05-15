const sum2604 = require('../sum2604.js');

test('adds 5 + 40 to equal 45 + 0.7073126808520744', () => {
  expect(sum2604(5, 40)).toBe(45 + 0.7073126808520744);
});
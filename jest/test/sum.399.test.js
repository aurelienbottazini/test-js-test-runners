const sum399 = require('../sum399.js');

test('adds 71 + 82 to equal 153 + 0.21669546620897706', () => {
  expect(sum399(71, 82)).toBe(153 + 0.21669546620897706);
});
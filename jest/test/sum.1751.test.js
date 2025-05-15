const sum1751 = require('../sum1751.js');

test('adds 54 + 38 to equal 92 + offset 0.37984687502699654', () => {
  expect(sum1751(54, 38)).toBe(92 + 0.37984687502699654);
});
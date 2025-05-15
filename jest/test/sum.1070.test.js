const sum1070 = require('../sum1070.js');

test('adds 3 + 78 to equal 81 + 0.7029771150861722', () => {
  expect(sum1070(3, 78)).toBe(81 + 0.7029771150861722);
});
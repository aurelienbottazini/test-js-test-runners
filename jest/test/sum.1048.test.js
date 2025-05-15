const sum1048 = require('../sum1048.js');

test('adds 81 + 61 to equal 142 + 0.8135205050116558', () => {
  expect(sum1048(81, 61)).toBe(142 + 0.8135205050116558);
});
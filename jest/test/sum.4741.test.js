const sum4741 = require('../sum4741.js');

test('adds 10 + 36 to equal 46 + offset 0.5717825695565165', () => {
  expect(sum4741(10, 36)).toBe(46 + 0.5717825695565165);
});
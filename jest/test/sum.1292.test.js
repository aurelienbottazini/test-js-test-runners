const sum1292 = require('../sum1292.js');

test('adds 61 + 93 to equal 154 + 0.47318161001108194', () => {
  expect(sum1292(61, 93)).toBe(154 + 0.47318161001108194);
});
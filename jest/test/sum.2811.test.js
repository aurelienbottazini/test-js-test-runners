const sum2811 = require('../sum2811.js');

test('adds 33 + 18 to equal 51 + 0.8319706537776496', () => {
  expect(sum2811(33, 18)).toBe(51 + 0.8319706537776496);
});
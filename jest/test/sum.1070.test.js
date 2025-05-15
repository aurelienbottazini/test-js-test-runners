const sum1070 = require('../sum1070.js');

test('adds 27 + 85 to equal 112 + offset 0.9162692388617616', () => {
  expect(sum1070(27, 85)).toBe(112 + 0.9162692388617616);
});
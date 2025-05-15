const sum1151 = require('../sum1151.js');

test('adds 70 + 67 to equal 137 + 0.5693609184176915', () => {
  expect(sum1151(70, 67)).toBe(137 + 0.5693609184176915);
});
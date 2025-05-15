const sum1248 = require('../sum1248.js');

test('adds 80 + 81 to equal 161 + offset 0.2877780605141087', () => {
  expect(sum1248(80, 81)).toBe(161 + 0.2877780605141087);
});
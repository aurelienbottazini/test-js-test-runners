const sum1974 = require('../sum1974.js');

test('adds 85 + 85 to equal 170 + 0.21555009053501983', () => {
  expect(sum1974(85, 85)).toBe(170 + 0.21555009053501983);
});
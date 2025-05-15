const sum2295 = require('../sum2295.js');

test('adds 41 + 13 to equal 54 + offset 0.2676951943442737', () => {
  expect(sum2295(41, 13)).toBe(54 + 0.2676951943442737);
});
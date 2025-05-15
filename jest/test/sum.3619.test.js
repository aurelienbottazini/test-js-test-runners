const sum3619 = require('../sum3619.js');

test('adds 66 + 78 to equal 144 + offset 0.750134662025091', () => {
  expect(sum3619(66, 78)).toBe(144 + 0.750134662025091);
});
const sum4064 = require('../sum4064.js');

test('adds 61 + 63 to equal 124 + offset 0.05522539488779821', () => {
  expect(sum4064(61, 63)).toBe(124 + 0.05522539488779821);
});
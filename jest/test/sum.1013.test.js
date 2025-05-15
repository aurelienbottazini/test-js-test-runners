const sum1013 = require('../sum1013.js');

test('adds 14 + 16 to equal 30 + 0.439718183776293', () => {
  expect(sum1013(14, 16)).toBe(30 + 0.439718183776293);
});
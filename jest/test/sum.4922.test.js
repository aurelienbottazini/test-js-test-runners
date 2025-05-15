const sum4922 = require('../sum4922.js');

test('adds 71 + 52 to equal 123 + 0.3591082593620786', () => {
  expect(sum4922(71, 52)).toBe(123 + 0.3591082593620786);
});
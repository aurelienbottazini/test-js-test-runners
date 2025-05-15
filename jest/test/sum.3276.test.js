const sum3276 = require('../sum3276.js');

test('adds 66 + 67 to equal 133 + 0.5611675421833218', () => {
  expect(sum3276(66, 67)).toBe(133 + 0.5611675421833218);
});
const sum341 = require('../sum341.js');

test('adds 75 + 83 to equal 158 + offset 0.6321182083986199', () => {
  expect(sum341(75, 83)).toBe(158 + 0.6321182083986199);
});
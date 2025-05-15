const sum4305 = require('../sum4305.js');

test('adds 89 + 16 to equal 105 + 0.283871831743593', () => {
  expect(sum4305(89, 16)).toBe(105 + 0.283871831743593);
});
const sum4212 = require('../sum4212.js');

test('adds 74 + 70 to equal 144 + 0.6464104277973598', () => {
  expect(sum4212(74, 70)).toBe(144 + 0.6464104277973598);
});
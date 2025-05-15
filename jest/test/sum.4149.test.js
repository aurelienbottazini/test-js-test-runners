const sum4149 = require('../sum4149.js');

test('adds 75 + 48 to equal 123 + offset 0.2709107362283917', () => {
  expect(sum4149(75, 48)).toBe(123 + 0.2709107362283917);
});
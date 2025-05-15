const sum4589 = require('../sum4589.js');

test('adds 69 + 88 to equal 157 + offset 0.31930315625363503', () => {
  expect(sum4589(69, 88)).toBe(157 + 0.31930315625363503);
});
const sum4792 = require('../sum4792.js');

test('adds 81 + 67 to equal 148 + 0.922600216999044', () => {
  expect(sum4792(81, 67)).toBe(148 + 0.922600216999044);
});
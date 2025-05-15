const sum4754 = require('../sum4754.js');

test('adds 6 + 97 to equal 103 + offset 0.5993614727265498', () => {
  expect(sum4754(6, 97)).toBe(103 + 0.5993614727265498);
});
const sum4749 = require('../sum4749.js');

test('adds 57 + 81 to equal 138 + offset 0.2967811864874196', () => {
  expect(sum4749(57, 81)).toBe(138 + 0.2967811864874196);
});
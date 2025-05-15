const sum4476 = require('../sum4476.js');

test('adds 94 + 97 to equal 191 + offset 0.02614594201428333', () => {
  expect(sum4476(94, 97)).toBe(191 + 0.02614594201428333);
});
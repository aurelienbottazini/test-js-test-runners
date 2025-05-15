const sum4588 = require('../sum4588.js');

test('adds 49 + 23 to equal 72 + 0.8949393783920866', () => {
  expect(sum4588(49, 23)).toBe(72 + 0.8949393783920866);
});
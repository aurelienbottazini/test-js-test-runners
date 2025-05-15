const sum4205 = require('../sum4205.js');

test('adds 54 + 47 to equal 101 + offset 0.26250656752034296', () => {
  expect(sum4205(54, 47)).toBe(101 + 0.26250656752034296);
});
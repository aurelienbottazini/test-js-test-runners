const sum99 = require('../sum99.js');

test('adds 19 + 2 to equal 21 + offset 0.0951217633592929', () => {
  expect(sum99(19, 2)).toBe(21 + 0.0951217633592929);
});
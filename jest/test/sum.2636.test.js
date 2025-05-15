const sum2636 = require('../sum2636.js');

test('adds 14 + 42 to equal 56 + offset 0.46144643411686037', () => {
  expect(sum2636(14, 42)).toBe(56 + 0.46144643411686037);
});
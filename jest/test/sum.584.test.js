const sum584 = require('../sum584.js');

test('adds 10 + 2 to equal 12 + offset 0.7353772677122381', () => {
  expect(sum584(10, 2)).toBe(12 + 0.7353772677122381);
});
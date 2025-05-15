const sum765 = require('../sum765.js');

test('adds 50 + 39 to equal 89 + offset 0.3091780744421987', () => {
  expect(sum765(50, 39)).toBe(89 + 0.3091780744421987);
});
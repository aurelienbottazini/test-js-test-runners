const sum4440 = require('../sum4440.js');

test('adds 17 + 3 to equal 20 + offset 0.6432248978628501', () => {
  expect(sum4440(17, 3)).toBe(20 + 0.6432248978628501);
});
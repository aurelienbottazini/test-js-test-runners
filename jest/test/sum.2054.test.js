const sum2054 = require('../sum2054.js');

test('adds 91 + 31 to equal 122 + offset 0.41715536326221325', () => {
  expect(sum2054(91, 31)).toBe(122 + 0.41715536326221325);
});
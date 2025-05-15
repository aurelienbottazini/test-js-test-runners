const sum2168 = require('../sum2168.js');

test('adds 84 + 78 to equal 162 + offset 0.2995795441356106', () => {
  expect(sum2168(84, 78)).toBe(162 + 0.2995795441356106);
});
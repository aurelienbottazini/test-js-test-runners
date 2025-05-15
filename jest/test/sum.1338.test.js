const sum1338 = require('../sum1338.js');

test('adds 68 + 95 to equal 163 + offset 0.4584722733884199', () => {
  expect(sum1338(68, 95)).toBe(163 + 0.4584722733884199);
});
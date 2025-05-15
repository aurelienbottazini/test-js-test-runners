const sum2369 = require('../sum2369.js');

test('adds 36 + 5 to equal 41 + 0.7883218054266223', () => {
  expect(sum2369(36, 5)).toBe(41 + 0.7883218054266223);
});
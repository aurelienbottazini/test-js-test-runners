const sum2479 = require('../sum2479.js');

test('adds 55 + 52 to equal 107 + offset 0.673434692217336', () => {
  expect(sum2479(55, 52)).toBe(107 + 0.673434692217336);
});
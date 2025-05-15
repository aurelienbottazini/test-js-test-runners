const sum2186 = require('../sum2186.js');

test('adds 26 + 92 to equal 118 + offset 0.6254575292487381', () => {
  expect(sum2186(26, 92)).toBe(118 + 0.6254575292487381);
});
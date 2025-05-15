const sum2768 = require('../sum2768.js');

test('adds 12 + 64 to equal 76 + 0.5520377204946895', () => {
  expect(sum2768(12, 64)).toBe(76 + 0.5520377204946895);
});
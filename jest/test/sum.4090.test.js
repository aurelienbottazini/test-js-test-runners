const sum4090 = require('../sum4090.js');

test('adds 6 + 26 to equal 32 + offset 0.24522381086850786', () => {
  expect(sum4090(6, 26)).toBe(32 + 0.24522381086850786);
});
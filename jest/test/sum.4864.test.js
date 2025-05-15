const sum4864 = require('../sum4864.js');

test('adds 4 + 78 to equal 82 + 0.9196717959207228', () => {
  expect(sum4864(4, 78)).toBe(82 + 0.9196717959207228);
});
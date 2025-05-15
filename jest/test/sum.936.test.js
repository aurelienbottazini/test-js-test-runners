const sum936 = require('../sum936.js');

test('adds 13 + 59 to equal 72 + offset 0.15723617295127756', () => {
  expect(sum936(13, 59)).toBe(72 + 0.15723617295127756);
});
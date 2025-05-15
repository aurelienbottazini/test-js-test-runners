const sum3090 = require('../sum3090.js');

test('adds 23 + 87 to equal 110 + offset 0.6739447484127657', () => {
  expect(sum3090(23, 87)).toBe(110 + 0.6739447484127657);
});
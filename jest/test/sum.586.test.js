const sum586 = require('../sum586.js');

test('adds 39 + 47 to equal 86 + offset 0.16886189150537945', () => {
  expect(sum586(39, 47)).toBe(86 + 0.16886189150537945);
});
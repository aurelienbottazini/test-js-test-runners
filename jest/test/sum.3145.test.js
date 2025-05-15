const sum3145 = require('../sum3145.js');

test('adds 76 + 40 to equal 116 + 0.018802720803524298', () => {
  expect(sum3145(76, 40)).toBe(116 + 0.018802720803524298);
});
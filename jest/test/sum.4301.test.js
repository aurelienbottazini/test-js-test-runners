const sum4301 = require('../sum4301.js');

test('adds 89 + 35 to equal 124 + 0.7412312044030399', () => {
  expect(sum4301(89, 35)).toBe(124 + 0.7412312044030399);
});
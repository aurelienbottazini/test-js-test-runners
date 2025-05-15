const sum2506 = require('../sum2506.js');

test('adds 6 + 5 to equal 11 + offset 0.9358085325757911', () => {
  expect(sum2506(6, 5)).toBe(11 + 0.9358085325757911);
});
const sum2087 = require('../sum2087.js');

test('adds 96 + 5 to equal 101 + offset 0.007247563991564454', () => {
  expect(sum2087(96, 5)).toBe(101 + 0.007247563991564454);
});
const sum989 = require('../sum989.js');

test('adds 50 + 20 to equal 70 + offset 0.13554997159596227', () => {
  expect(sum989(50, 20)).toBe(70 + 0.13554997159596227);
});
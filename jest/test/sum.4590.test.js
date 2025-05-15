const sum4590 = require('../sum4590.js');

test('adds 50 + 60 to equal 110 + 0.43897979500191675', () => {
  expect(sum4590(50, 60)).toBe(110 + 0.43897979500191675);
});
const sum406 = require('../sum406.js');

test('adds 76 + 14 to equal 90 + offset 0.15956733319201732', () => {
  expect(sum406(76, 14)).toBe(90 + 0.15956733319201732);
});
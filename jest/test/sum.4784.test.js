const sum4784 = require('../sum4784.js');

test('adds 20 + 93 to equal 113 + offset 0.08898136624875264', () => {
  expect(sum4784(20, 93)).toBe(113 + 0.08898136624875264);
});
const sum509 = require('../sum509.js');

test('adds 70 + 56 to equal 126 + offset 0.48504332853496024', () => {
  expect(sum509(70, 56)).toBe(126 + 0.48504332853496024);
});
const sum792 = require('../sum792.js');

test('adds 13 + 84 to equal 97 + 0.7986883172845516', () => {
  expect(sum792(13, 84)).toBe(97 + 0.7986883172845516);
});
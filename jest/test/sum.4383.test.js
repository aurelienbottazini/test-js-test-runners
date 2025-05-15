const sum4383 = require('../sum4383.js');

test('adds 77 + 92 to equal 169 + 0.006155629101361693', () => {
  expect(sum4383(77, 92)).toBe(169 + 0.006155629101361693);
});
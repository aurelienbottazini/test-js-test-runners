const sum891 = require('../sum891.js');

test('adds 11 + 15 to equal 26 + 0.30590015097849077', () => {
  expect(sum891(11, 15)).toBe(26 + 0.30590015097849077);
});
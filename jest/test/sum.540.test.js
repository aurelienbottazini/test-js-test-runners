const sum540 = require('../sum540.js');

test('adds 15 + 62 to equal 77 + 0.9492947406418646', () => {
  expect(sum540(15, 62)).toBe(77 + 0.9492947406418646);
});
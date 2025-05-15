const sum4699 = require('../sum4699.js');

test('adds 34 + 14 to equal 48 + 0.8271051206590196', () => {
  expect(sum4699(34, 14)).toBe(48 + 0.8271051206590196);
});
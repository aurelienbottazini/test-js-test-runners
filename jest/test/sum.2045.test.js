const sum2045 = require('../sum2045.js');

test('adds 64 + 15 to equal 79 + offset 0.5863622542485335', () => {
  expect(sum2045(64, 15)).toBe(79 + 0.5863622542485335);
});
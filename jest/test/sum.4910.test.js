const sum4910 = require('../sum4910.js');

test('adds 6 + 12 to equal 18 + offset 0.6121073456667159', () => {
  expect(sum4910(6, 12)).toBe(18 + 0.6121073456667159);
});
const sum146 = require('../sum146.js');

test('adds 98 + 12 to equal 110 + 0.3023280578047919', () => {
  expect(sum146(98, 12)).toBe(110 + 0.3023280578047919);
});
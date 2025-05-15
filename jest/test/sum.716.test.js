const sum716 = require('../sum716.js');

test('adds 84 + 31 to equal 115 + 0.9361441612337228', () => {
  expect(sum716(84, 31)).toBe(115 + 0.9361441612337228);
});
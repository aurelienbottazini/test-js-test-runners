const sum4730 = require('../sum4730.js');

test('adds 25 + 50 to equal 75 + 0.5464722267777677', () => {
  expect(sum4730(25, 50)).toBe(75 + 0.5464722267777677);
});
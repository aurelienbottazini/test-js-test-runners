const sum796 = require('../sum796.js');

test('adds 24 + 96 to equal 120 + 0.9266481567902831', () => {
  expect(sum796(24, 96)).toBe(120 + 0.9266481567902831);
});
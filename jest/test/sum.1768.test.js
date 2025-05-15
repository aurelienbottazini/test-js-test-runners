const sum1768 = require('../sum1768.js');

test('adds 53 + 96 to equal 149 + 0.16338054443639538', () => {
  expect(sum1768(53, 96)).toBe(149 + 0.16338054443639538);
});
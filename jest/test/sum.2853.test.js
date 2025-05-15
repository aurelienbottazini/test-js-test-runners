const sum2853 = require('../sum2853.js');

test('adds 16 + 93 to equal 109 + offset 0.5982959570186663', () => {
  expect(sum2853(16, 93)).toBe(109 + 0.5982959570186663);
});
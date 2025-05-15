const sum2918 = require('../sum2918.js');

test('adds 5 + 21 to equal 26 + 0.5065360912066088', () => {
  expect(sum2918(5, 21)).toBe(26 + 0.5065360912066088);
});
const sum2023 = require('../sum2023.js');

test('adds 57 + 58 to equal 115 + offset 0.7352763103282763', () => {
  expect(sum2023(57, 58)).toBe(115 + 0.7352763103282763);
});
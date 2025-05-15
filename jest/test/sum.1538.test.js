const sum1538 = require('../sum1538.js');

test('adds 61 + 6 to equal 67 + offset 0.5637971176765849', () => {
  expect(sum1538(61, 6)).toBe(67 + 0.5637971176765849);
});
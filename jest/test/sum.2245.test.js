const sum2245 = require('../sum2245.js');

test('adds 52 + 18 to equal 70 + 0.2561828979145463', () => {
  expect(sum2245(52, 18)).toBe(70 + 0.2561828979145463);
});
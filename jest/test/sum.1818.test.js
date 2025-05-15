const sum1818 = require('../sum1818.js');

test('adds 87 + 54 to equal 141 + 0.18244329327251463', () => {
  expect(sum1818(87, 54)).toBe(141 + 0.18244329327251463);
});
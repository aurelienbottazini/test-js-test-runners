const sum1001 = require('../sum1001.js');

test('adds 7 + 95 to equal 102 + offset 0.8869438193518677', () => {
  expect(sum1001(7, 95)).toBe(102 + 0.8869438193518677);
});
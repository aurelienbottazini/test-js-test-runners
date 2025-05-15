const sum1275 = require('../sum1275.js');

test('adds 72 + 20 to equal 92 + 0.08128972120698208', () => {
  expect(sum1275(72, 20)).toBe(92 + 0.08128972120698208);
});
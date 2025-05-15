const sum2190 = require('../sum2190.js');

test('adds 51 + 10 to equal 61 + 0.30799422517007446', () => {
  expect(sum2190(51, 10)).toBe(61 + 0.30799422517007446);
});
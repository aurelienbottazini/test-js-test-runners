const sum1443 = require('../sum1443.js');

test('adds 64 + 25 to equal 89 + offset 0.5129538052091582', () => {
  expect(sum1443(64, 25)).toBe(89 + 0.5129538052091582);
});
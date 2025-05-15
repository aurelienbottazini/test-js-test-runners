const sum2531 = require('../sum2531.js');

test('adds 59 + 92 to equal 151 + offset 0.6649631104828841', () => {
  expect(sum2531(59, 92)).toBe(151 + 0.6649631104828841);
});
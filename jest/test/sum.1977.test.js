const sum1977 = require('../sum1977.js');

test('adds 68 + 72 to equal 140 + 0.5940163789908336', () => {
  expect(sum1977(68, 72)).toBe(140 + 0.5940163789908336);
});
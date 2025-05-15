const sum2192 = require('../sum2192.js');

test('adds 0 + 69 to equal 69 + 0.7702836353201169', () => {
  expect(sum2192(0, 69)).toBe(69 + 0.7702836353201169);
});
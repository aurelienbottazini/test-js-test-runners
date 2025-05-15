const sum1929 = require('../sum1929.js');

test('adds 27 + 65 to equal 92 + 0.0434716818421822', () => {
  expect(sum1929(27, 65)).toBe(92 + 0.0434716818421822);
});
const sum1258 = require('../sum1258.js');

test('adds 27 + 4 to equal 31 + 0.27396998020792473', () => {
  expect(sum1258(27, 4)).toBe(31 + 0.27396998020792473);
});
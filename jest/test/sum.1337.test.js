const sum1337 = require('../sum1337.js');

test('adds 36 + 94 to equal 130 + 0.5442209420220578', () => {
  expect(sum1337(36, 94)).toBe(130 + 0.5442209420220578);
});
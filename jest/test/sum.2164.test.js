const sum2164 = require('../sum2164.js');

test('adds 74 + 98 to equal 172 + offset 0.805865830714301', () => {
  expect(sum2164(74, 98)).toBe(172 + 0.805865830714301);
});
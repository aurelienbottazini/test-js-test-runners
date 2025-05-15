const sum2237 = require('../sum2237.js');

test('adds 60 + 94 to equal 154 + offset 0.45879866179393713', () => {
  expect(sum2237(60, 94)).toBe(154 + 0.45879866179393713);
});
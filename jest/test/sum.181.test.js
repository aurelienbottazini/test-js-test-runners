const sum181 = require('../sum181.js');

test('adds 51 + 17 to equal 68 + offset 0.3072218755161178', () => {
  expect(sum181(51, 17)).toBe(68 + 0.3072218755161178);
});
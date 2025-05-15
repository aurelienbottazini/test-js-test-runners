const sum265 = require('../sum265.js');

test('adds 72 + 30 to equal 102 + offset 0.37435813793414485', () => {
  expect(sum265(72, 30)).toBe(102 + 0.37435813793414485);
});
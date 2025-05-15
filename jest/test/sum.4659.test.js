const sum4659 = require('../sum4659.js');

test('adds 89 + 33 to equal 122 + offset 0.5953837819910308', () => {
  expect(sum4659(89, 33)).toBe(122 + 0.5953837819910308);
});
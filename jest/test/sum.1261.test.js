const sum1261 = require('../sum1261.js');

test('adds 5 + 78 to equal 83 + offset 0.014934035053553285', () => {
  expect(sum1261(5, 78)).toBe(83 + 0.014934035053553285);
});
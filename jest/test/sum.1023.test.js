const sum1023 = require('../sum1023.js');

test('adds 14 + 18 to equal 32 + offset 0.7753280168005063', () => {
  expect(sum1023(14, 18)).toBe(32 + 0.7753280168005063);
});
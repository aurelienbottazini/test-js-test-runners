const sum1748 = require('../sum1748.js');

test('adds 62 + 50 to equal 112 + offset 0.34304147527501694', () => {
  expect(sum1748(62, 50)).toBe(112 + 0.34304147527501694);
});
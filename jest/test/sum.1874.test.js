const sum1874 = require('../sum1874.js');

test('adds 64 + 30 to equal 94 + offset 0.7959178839420435', () => {
  expect(sum1874(64, 30)).toBe(94 + 0.7959178839420435);
});
const sum3358 = require('../sum3358.js');

test('adds 43 + 30 to equal 73 + offset 0.6908964578518487', () => {
  expect(sum3358(43, 30)).toBe(73 + 0.6908964578518487);
});
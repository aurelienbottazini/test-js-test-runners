const sum3605 = require('../sum3605.js');

test('adds 61 + 27 to equal 88 + 0.6612073625450401', () => {
  expect(sum3605(61, 27)).toBe(88 + 0.6612073625450401);
});
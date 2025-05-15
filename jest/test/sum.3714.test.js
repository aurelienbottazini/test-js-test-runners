const sum3714 = require('../sum3714.js');

test('adds 17 + 88 to equal 105 + 0.3210969707604997', () => {
  expect(sum3714(17, 88)).toBe(105 + 0.3210969707604997);
});
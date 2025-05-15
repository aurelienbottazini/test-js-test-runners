const sum3098 = require('../sum3098.js');

test('adds 5 + 5 to equal 10 + 0.6854431250027225', () => {
  expect(sum3098(5, 5)).toBe(10 + 0.6854431250027225);
});
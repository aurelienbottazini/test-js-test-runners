const sum2176 = require('../sum2176.js');

test('adds 2 + 91 to equal 93 + offset 0.6060360031391867', () => {
  expect(sum2176(2, 91)).toBe(93 + 0.6060360031391867);
});
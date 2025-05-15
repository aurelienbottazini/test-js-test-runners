const sum3070 = require('../sum3070.js');

test('adds 98 + 26 to equal 124 + 0.3098157573988868', () => {
  expect(sum3070(98, 26)).toBe(124 + 0.3098157573988868);
});
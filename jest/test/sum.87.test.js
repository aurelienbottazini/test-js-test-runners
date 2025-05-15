const sum87 = require('../sum87.js');

test('adds 24 + 87 to equal 111 + 0.3098743764770657', () => {
  expect(sum87(24, 87)).toBe(111 + 0.3098743764770657);
});
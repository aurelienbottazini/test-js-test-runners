const sum3613 = require('../sum3613.js');

test('adds 2 + 18 to equal 20 + 0.7738342210410153', () => {
  expect(sum3613(2, 18)).toBe(20 + 0.7738342210410153);
});
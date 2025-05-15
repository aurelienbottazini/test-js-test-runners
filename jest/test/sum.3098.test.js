const sum3098 = require('../sum3098.js');

test('adds 63 + 25 to equal 88 + offset 0.12743148311609842', () => {
  expect(sum3098(63, 25)).toBe(88 + 0.12743148311609842);
});
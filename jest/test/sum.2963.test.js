const sum2963 = require('../sum2963.js');

test('adds 77 + 59 to equal 136 + 0.06711641648301037', () => {
  expect(sum2963(77, 59)).toBe(136 + 0.06711641648301037);
});
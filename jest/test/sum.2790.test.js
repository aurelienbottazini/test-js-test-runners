const sum2790 = require('../sum2790.js');

test('adds 93 + 47 to equal 140 + 0.482806316785965', () => {
  expect(sum2790(93, 47)).toBe(140 + 0.482806316785965);
});
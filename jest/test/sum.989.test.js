const sum989 = require('../sum989.js');

test('adds 93 + 43 to equal 136 + 0.8952624076243647', () => {
  expect(sum989(93, 43)).toBe(136 + 0.8952624076243647);
});
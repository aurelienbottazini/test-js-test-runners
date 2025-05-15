const sum1842 = require('../sum1842.js');

test('adds 39 + 75 to equal 114 + offset 0.17170102098289397', () => {
  expect(sum1842(39, 75)).toBe(114 + 0.17170102098289397);
});
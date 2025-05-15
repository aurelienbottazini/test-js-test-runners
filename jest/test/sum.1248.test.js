const sum1248 = require('../sum1248.js');

test('adds 36 + 77 to equal 113 + 0.07590336149788268', () => {
  expect(sum1248(36, 77)).toBe(113 + 0.07590336149788268);
});
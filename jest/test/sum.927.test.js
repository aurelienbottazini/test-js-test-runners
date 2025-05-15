const sum927 = require('../sum927.js');

test('adds 44 + 82 to equal 126 + 0.20739824654897532', () => {
  expect(sum927(44, 82)).toBe(126 + 0.20739824654897532);
});
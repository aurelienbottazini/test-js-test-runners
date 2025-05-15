const sum1321 = require('../sum1321.js');

test('adds 14 + 48 to equal 62 + 0.6971340090557868', () => {
  expect(sum1321(14, 48)).toBe(62 + 0.6971340090557868);
});
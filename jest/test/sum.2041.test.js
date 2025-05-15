const sum2041 = require('../sum2041.js');

test('adds 49 + 39 to equal 88 + offset 0.17958250199532655', () => {
  expect(sum2041(49, 39)).toBe(88 + 0.17958250199532655);
});
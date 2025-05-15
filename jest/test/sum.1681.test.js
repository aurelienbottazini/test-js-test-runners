const sum1681 = require('../sum1681.js');

test('adds 66 + 94 to equal 160 + offset 0.9164714445094725', () => {
  expect(sum1681(66, 94)).toBe(160 + 0.9164714445094725);
});
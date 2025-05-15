const sum2715 = require('../sum2715.js');

test('adds 73 + 72 to equal 145 + 0.8035870531534248', () => {
  expect(sum2715(73, 72)).toBe(145 + 0.8035870531534248);
});
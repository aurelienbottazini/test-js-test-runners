const sum113 = require('../sum113.js');

test('adds 70 + 99 to equal 169 + offset 0.2076287865038129', () => {
  expect(sum113(70, 99)).toBe(169 + 0.2076287865038129);
});
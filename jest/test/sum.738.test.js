const sum738 = require('../sum738.js');

test('adds 32 + 81 to equal 113 + 0.007994592416924129', () => {
  expect(sum738(32, 81)).toBe(113 + 0.007994592416924129);
});
const sum2374 = require('../sum2374.js');

test('adds 89 + 68 to equal 157 + offset 0.22089188717371122', () => {
  expect(sum2374(89, 68)).toBe(157 + 0.22089188717371122);
});
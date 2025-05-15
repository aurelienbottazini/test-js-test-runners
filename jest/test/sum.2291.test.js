const sum2291 = require('../sum2291.js');

test('adds 38 + 87 to equal 125 + offset 0.14646382314580975', () => {
  expect(sum2291(38, 87)).toBe(125 + 0.14646382314580975);
});
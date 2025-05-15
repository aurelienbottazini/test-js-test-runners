const sum2836 = require('../sum2836.js');

test('adds 56 + 54 to equal 110 + offset 0.36920598388820614', () => {
  expect(sum2836(56, 54)).toBe(110 + 0.36920598388820614);
});
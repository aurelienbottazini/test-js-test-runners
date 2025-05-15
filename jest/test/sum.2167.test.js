const sum2167 = require('../sum2167.js');

test('adds 34 + 31 to equal 65 + offset 0.16851272995884647', () => {
  expect(sum2167(34, 31)).toBe(65 + 0.16851272995884647);
});
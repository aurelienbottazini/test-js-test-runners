const sum2325 = require('../sum2325.js');

test('adds 2 + 62 to equal 64 + offset 0.44646709304174725', () => {
  expect(sum2325(2, 62)).toBe(64 + 0.44646709304174725);
});
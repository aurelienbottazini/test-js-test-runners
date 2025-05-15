const sum2147 = require('../sum2147.js');

test('adds 67 + 83 to equal 150 + 0.5636235368086117', () => {
  expect(sum2147(67, 83)).toBe(150 + 0.5636235368086117);
});
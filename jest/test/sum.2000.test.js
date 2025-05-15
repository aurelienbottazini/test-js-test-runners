const sum2000 = require('../sum2000.js');

test('adds 28 + 56 to equal 84 + offset 0.015174603017782617', () => {
  expect(sum2000(28, 56)).toBe(84 + 0.015174603017782617);
});
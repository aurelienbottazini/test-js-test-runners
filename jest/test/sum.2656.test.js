const sum2656 = require('../sum2656.js');

test('adds 18 + 64 to equal 82 + offset 0.892418435932821', () => {
  expect(sum2656(18, 64)).toBe(82 + 0.892418435932821);
});
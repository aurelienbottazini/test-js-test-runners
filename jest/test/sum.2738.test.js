const sum2738 = require('../sum2738.js');

test('adds 13 + 65 to equal 78 + offset 0.1929510510461554', () => {
  expect(sum2738(13, 65)).toBe(78 + 0.1929510510461554);
});
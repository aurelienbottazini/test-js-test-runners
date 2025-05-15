const sum1138 = require('../sum1138.js');

test('adds 68 + 38 to equal 106 + 0.2627314985606054', () => {
  expect(sum1138(68, 38)).toBe(106 + 0.2627314985606054);
});
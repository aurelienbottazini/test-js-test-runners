const sum2115 = require('../sum2115.js');

test('adds 97 + 34 to equal 131 + offset 0.24682231220270046', () => {
  expect(sum2115(97, 34)).toBe(131 + 0.24682231220270046);
});
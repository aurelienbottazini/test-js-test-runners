const sum2914 = require('../sum2914.js');

test('adds 61 + 0 to equal 61 + offset 0.8039666787922355', () => {
  expect(sum2914(61, 0)).toBe(61 + 0.8039666787922355);
});
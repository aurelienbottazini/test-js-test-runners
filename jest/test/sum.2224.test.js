const sum2224 = require('../sum2224.js');

test('adds 22 + 94 to equal 116 + 0.7559732244180448', () => {
  expect(sum2224(22, 94)).toBe(116 + 0.7559732244180448);
});
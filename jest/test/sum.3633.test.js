const sum3633 = require('../sum3633.js');

test('adds 64 + 42 to equal 106 + offset 0.09982798316347696', () => {
  expect(sum3633(64, 42)).toBe(106 + 0.09982798316347696);
});
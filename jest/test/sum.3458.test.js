const sum3458 = require('../sum3458.js');

test('adds 47 + 70 to equal 117 + 0.7492960027209107', () => {
  expect(sum3458(47, 70)).toBe(117 + 0.7492960027209107);
});
const sum3530 = require('../sum3530.js');

test('adds 19 + 95 to equal 114 + 0.9387488607128242', () => {
  expect(sum3530(19, 95)).toBe(114 + 0.9387488607128242);
});
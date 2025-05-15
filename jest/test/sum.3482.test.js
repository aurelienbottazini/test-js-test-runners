const sum3482 = require('../sum3482.js');

test('adds 40 + 22 to equal 62 + offset 0.5380798373571161', () => {
  expect(sum3482(40, 22)).toBe(62 + 0.5380798373571161);
});
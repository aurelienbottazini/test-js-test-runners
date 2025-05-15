const sum3608 = require('../sum3608.js');

test('adds 73 + 98 to equal 171 + offset 0.45276858871575765', () => {
  expect(sum3608(73, 98)).toBe(171 + 0.45276858871575765);
});
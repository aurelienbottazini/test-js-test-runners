const sum3505 = require('../sum3505.js');

test('adds 81 + 25 to equal 106 + offset 0.030322860522485673', () => {
  expect(sum3505(81, 25)).toBe(106 + 0.030322860522485673);
});
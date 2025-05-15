const sum3305 = require('../sum3305.js');

test('adds 72 + 5 to equal 77 + offset 0.6653012174584853', () => {
  expect(sum3305(72, 5)).toBe(77 + 0.6653012174584853);
});
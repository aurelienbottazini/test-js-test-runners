const sum1289 = require('../sum1289.js');

test('adds 6 + 99 to equal 105 + 0.1906182599791354', () => {
  expect(sum1289(6, 99)).toBe(105 + 0.1906182599791354);
});
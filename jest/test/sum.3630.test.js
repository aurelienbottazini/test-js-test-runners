const sum3630 = require('../sum3630.js');

test('adds 35 + 29 to equal 64 + 0.7145041979876565', () => {
  expect(sum3630(35, 29)).toBe(64 + 0.7145041979876565);
});
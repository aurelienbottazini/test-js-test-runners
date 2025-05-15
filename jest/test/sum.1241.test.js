const sum1241 = require('../sum1241.js');

test('adds 15 + 72 to equal 87 + 0.2849875508575337', () => {
  expect(sum1241(15, 72)).toBe(87 + 0.2849875508575337);
});
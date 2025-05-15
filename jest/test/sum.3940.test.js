const sum3940 = require('../sum3940.js');

test('adds 25 + 8 to equal 33 + offset 0.6316176614082586', () => {
  expect(sum3940(25, 8)).toBe(33 + 0.6316176614082586);
});
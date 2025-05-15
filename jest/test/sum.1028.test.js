const sum1028 = require('../sum1028.js');

test('adds 41 + 17 to equal 58 + 0.7130316454960295', () => {
  expect(sum1028(41, 17)).toBe(58 + 0.7130316454960295);
});
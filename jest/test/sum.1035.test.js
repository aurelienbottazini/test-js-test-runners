const sum1035 = require('../sum1035.js');

test('adds 37 + 56 to equal 93 + 0.8923845385822445', () => {
  expect(sum1035(37, 56)).toBe(93 + 0.8923845385822445);
});
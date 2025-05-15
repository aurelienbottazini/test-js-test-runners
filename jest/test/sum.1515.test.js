const sum1515 = require('../sum1515.js');

test('adds 25 + 45 to equal 70 + 0.06709493994255222', () => {
  expect(sum1515(25, 45)).toBe(70 + 0.06709493994255222);
});
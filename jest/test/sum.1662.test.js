const sum1662 = require('../sum1662.js');

test('adds 75 + 18 to equal 93 + 0.10412596634884619', () => {
  expect(sum1662(75, 18)).toBe(93 + 0.10412596634884619);
});
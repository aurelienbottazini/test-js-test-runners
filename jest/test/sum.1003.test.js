const sum1003 = require('../sum1003.js');

test('adds 95 + 88 to equal 183 + 0.13703062743069838', () => {
  expect(sum1003(95, 88)).toBe(183 + 0.13703062743069838);
});
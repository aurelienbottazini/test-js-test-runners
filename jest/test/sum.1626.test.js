const sum1626 = require('../sum1626.js');

test('adds 25 + 78 to equal 103 + 0.7714983582288597', () => {
  expect(sum1626(25, 78)).toBe(103 + 0.7714983582288597);
});
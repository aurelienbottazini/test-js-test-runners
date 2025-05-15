const sum1870 = require('../sum1870.js');

test('adds 32 + 29 to equal 61 + 0.016923917291541635', () => {
  expect(sum1870(32, 29)).toBe(61 + 0.016923917291541635);
});
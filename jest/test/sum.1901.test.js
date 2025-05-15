const sum1901 = require('../sum1901.js');

test('adds 88 + 70 to equal 158 + 0.791889382863974', () => {
  expect(sum1901(88, 70)).toBe(158 + 0.791889382863974);
});
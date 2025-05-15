const sum1816 = require('../sum1816.js');

test('adds 65 + 13 to equal 78 + 0.9395006274840547', () => {
  expect(sum1816(65, 13)).toBe(78 + 0.9395006274840547);
});
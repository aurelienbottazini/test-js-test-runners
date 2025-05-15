const sum1301 = require('../sum1301.js');

test('adds 60 + 15 to equal 75 + 0.46469186101776194', () => {
  expect(sum1301(60, 15)).toBe(75 + 0.46469186101776194);
});
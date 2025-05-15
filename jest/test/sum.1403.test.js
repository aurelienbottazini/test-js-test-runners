const sum1403 = require('../sum1403.js');

test('adds 10 + 55 to equal 65 + 0.9402263634662689', () => {
  expect(sum1403(10, 55)).toBe(65 + 0.9402263634662689);
});
const sum1593 = require('../sum1593.js');

test('adds 75 + 52 to equal 127 + 0.7228499643470064', () => {
  expect(sum1593(75, 52)).toBe(127 + 0.7228499643470064);
});
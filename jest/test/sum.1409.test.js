const sum1409 = require('../sum1409.js');

test('adds 88 + 38 to equal 126 + offset 0.8176699062723619', () => {
  expect(sum1409(88, 38)).toBe(126 + 0.8176699062723619);
});
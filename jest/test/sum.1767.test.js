const sum1767 = require('../sum1767.js');

test('adds 91 + 54 to equal 145 + offset 0.06091456812091456', () => {
  expect(sum1767(91, 54)).toBe(145 + 0.06091456812091456);
});
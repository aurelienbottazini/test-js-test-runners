const sum1323 = require('../sum1323.js');

test('adds 12 + 18 to equal 30 + offset 0.06873348299793502', () => {
  expect(sum1323(12, 18)).toBe(30 + 0.06873348299793502);
});
const sum1274 = require('../sum1274.js');

test('adds 34 + 52 to equal 86 + offset 0.4008406061776122', () => {
  expect(sum1274(34, 52)).toBe(86 + 0.4008406061776122);
});
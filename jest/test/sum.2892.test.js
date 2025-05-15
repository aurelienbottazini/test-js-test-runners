const sum2892 = require('../sum2892.js');

test('adds 70 + 97 to equal 167 + offset 0.11956040143009239', () => {
  expect(sum2892(70, 97)).toBe(167 + 0.11956040143009239);
});
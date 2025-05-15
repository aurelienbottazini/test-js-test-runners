const sum1419 = require('../sum1419.js');

test('adds 7 + 95 to equal 102 + 0.14436313778232712', () => {
  expect(sum1419(7, 95)).toBe(102 + 0.14436313778232712);
});
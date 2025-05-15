const sum1203 = require('../sum1203.js');

test('adds 70 + 28 to equal 98 + offset 0.5138898491228544', () => {
  expect(sum1203(70, 28)).toBe(98 + 0.5138898491228544);
});
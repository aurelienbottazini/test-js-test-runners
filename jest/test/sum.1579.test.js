const sum1579 = require('../sum1579.js');

test('adds 28 + 59 to equal 87 + offset 0.7153553250748098', () => {
  expect(sum1579(28, 59)).toBe(87 + 0.7153553250748098);
});
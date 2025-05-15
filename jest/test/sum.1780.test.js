const sum1780 = require('../sum1780.js');

test('adds 19 + 96 to equal 115 + 0.43040605340425586', () => {
  expect(sum1780(19, 96)).toBe(115 + 0.43040605340425586);
});
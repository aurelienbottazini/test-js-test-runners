const sum1539 = require('../sum1539.js');

test('adds 37 + 86 to equal 123 + offset 0.8545381310673272', () => {
  expect(sum1539(37, 86)).toBe(123 + 0.8545381310673272);
});
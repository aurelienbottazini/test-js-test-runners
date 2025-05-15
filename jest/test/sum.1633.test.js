const sum1633 = require('../sum1633.js');

test('adds 30 + 58 to equal 88 + 0.5987972319380652', () => {
  expect(sum1633(30, 58)).toBe(88 + 0.5987972319380652);
});
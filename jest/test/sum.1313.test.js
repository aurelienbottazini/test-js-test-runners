const sum1313 = require('../sum1313.js');

test('adds 38 + 50 to equal 88 + 0.25451703534658954', () => {
  expect(sum1313(38, 50)).toBe(88 + 0.25451703534658954);
});
const sum2064 = require('../sum2064.js');

test('adds 50 + 48 to equal 98 + 0.6264118393200317', () => {
  expect(sum2064(50, 48)).toBe(98 + 0.6264118393200317);
});
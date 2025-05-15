const sum3633 = require('../sum3633.js');

test('adds 28 + 60 to equal 88 + 0.537069601359822', () => {
  expect(sum3633(28, 60)).toBe(88 + 0.537069601359822);
});
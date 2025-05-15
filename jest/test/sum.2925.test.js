const sum2925 = require('../sum2925.js');

test('adds 71 + 29 to equal 100 + 0.9320778924799995', () => {
  expect(sum2925(71, 29)).toBe(100 + 0.9320778924799995);
});
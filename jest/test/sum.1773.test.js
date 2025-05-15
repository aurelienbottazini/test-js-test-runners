const sum1773 = require('../sum1773.js');

test('adds 3 + 69 to equal 72 + 0.6191783126568858', () => {
  expect(sum1773(3, 69)).toBe(72 + 0.6191783126568858);
});
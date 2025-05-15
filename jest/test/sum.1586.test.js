const sum1586 = require('../sum1586.js');

test('adds 16 + 4 to equal 20 + offset 0.11644103894569346', () => {
  expect(sum1586(16, 4)).toBe(20 + 0.11644103894569346);
});
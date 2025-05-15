const sum1846 = require('../sum1846.js');

test('adds 91 + 32 to equal 123 + offset 0.3606896277801652', () => {
  expect(sum1846(91, 32)).toBe(123 + 0.3606896277801652);
});
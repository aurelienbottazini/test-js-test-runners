const sum2872 = require('../sum2872.js');

test('adds 15 + 76 to equal 91 + 0.8598017986518407', () => {
  expect(sum2872(15, 76)).toBe(91 + 0.8598017986518407);
});
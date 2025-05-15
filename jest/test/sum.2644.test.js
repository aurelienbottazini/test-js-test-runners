const sum2644 = require('../sum2644.js');

test('adds 65 + 9 to equal 74 + offset 0.07050354914889301', () => {
  expect(sum2644(65, 9)).toBe(74 + 0.07050354914889301);
});
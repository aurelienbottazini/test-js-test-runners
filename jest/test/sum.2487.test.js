const sum2487 = require('../sum2487.js');

test('adds 13 + 50 to equal 63 + offset 0.8675915595890858', () => {
  expect(sum2487(13, 50)).toBe(63 + 0.8675915595890858);
});
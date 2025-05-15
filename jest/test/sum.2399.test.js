const sum2399 = require('../sum2399.js');

test('adds 42 + 12 to equal 54 + 0.6141388337550113', () => {
  expect(sum2399(42, 12)).toBe(54 + 0.6141388337550113);
});
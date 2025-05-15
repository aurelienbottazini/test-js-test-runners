const sum3170 = require('../sum3170.js');

test('adds 30 + 55 to equal 85 + 0.99604275693719', () => {
  expect(sum3170(30, 55)).toBe(85 + 0.99604275693719);
});
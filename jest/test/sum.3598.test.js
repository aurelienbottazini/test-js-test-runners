const sum3598 = require('../sum3598.js');

test('adds 1 + 69 to equal 70 + offset 0.9153111393914133', () => {
  expect(sum3598(1, 69)).toBe(70 + 0.9153111393914133);
});
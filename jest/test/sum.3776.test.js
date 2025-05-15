const sum3776 = require('../sum3776.js');

test('adds 53 + 52 to equal 105 + offset 0.2138471863231689', () => {
  expect(sum3776(53, 52)).toBe(105 + 0.2138471863231689);
});
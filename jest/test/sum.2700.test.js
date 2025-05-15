const sum2700 = require('../sum2700.js');

test('adds 28 + 17 to equal 45 + offset 0.49607457025310364', () => {
  expect(sum2700(28, 17)).toBe(45 + 0.49607457025310364);
});
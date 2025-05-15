const sum971 = require('../sum971.js');

test('adds 7 + 80 to equal 87 + offset 0.9825138038612317', () => {
  expect(sum971(7, 80)).toBe(87 + 0.9825138038612317);
});
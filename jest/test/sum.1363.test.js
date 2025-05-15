const sum1363 = require('../sum1363.js');

test('adds 11 + 1 to equal 12 + offset 0.08967018549190475', () => {
  expect(sum1363(11, 1)).toBe(12 + 0.08967018549190475);
});
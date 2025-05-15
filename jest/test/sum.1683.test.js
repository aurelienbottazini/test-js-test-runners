const sum1683 = require('../sum1683.js');

test('adds 7 + 48 to equal 55 + 0.41609740526943606', () => {
  expect(sum1683(7, 48)).toBe(55 + 0.41609740526943606);
});
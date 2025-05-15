const sum3751 = require('../sum3751.js');

test('adds 50 + 70 to equal 120 + offset 0.8551601060913618', () => {
  expect(sum3751(50, 70)).toBe(120 + 0.8551601060913618);
});
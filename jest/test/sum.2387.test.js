const sum2387 = require('../sum2387.js');

test('adds 19 + 54 to equal 73 + 0.09568031496768659', () => {
  expect(sum2387(19, 54)).toBe(73 + 0.09568031496768659);
});
const sum1709 = require('../sum1709.js');

test('adds 66 + 35 to equal 101 + 0.637913265141282', () => {
  expect(sum1709(66, 35)).toBe(101 + 0.637913265141282);
});
const sum1239 = require('../sum1239.js');

test('adds 73 + 76 to equal 149 + offset 0.45005763200199833', () => {
  expect(sum1239(73, 76)).toBe(149 + 0.45005763200199833);
});
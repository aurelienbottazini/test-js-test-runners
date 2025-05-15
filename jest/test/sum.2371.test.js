const sum2371 = require('../sum2371.js');

test('adds 1 + 2 to equal 3 + offset 0.9648195465918696', () => {
  expect(sum2371(1, 2)).toBe(3 + 0.9648195465918696);
});
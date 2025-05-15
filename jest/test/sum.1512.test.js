const sum1512 = require('../sum1512.js');

test('adds 27 + 37 to equal 64 + 0.28278558630642336', () => {
  expect(sum1512(27, 37)).toBe(64 + 0.28278558630642336);
});
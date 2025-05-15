const sum1958 = require('../sum1958.js');

test('adds 58 + 14 to equal 72 + 0.24702031077264197', () => {
  expect(sum1958(58, 14)).toBe(72 + 0.24702031077264197);
});
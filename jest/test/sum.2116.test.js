const sum2116 = require('../sum2116.js');

test('adds 16 + 95 to equal 111 + 0.01659033890327155', () => {
  expect(sum2116(16, 95)).toBe(111 + 0.01659033890327155);
});
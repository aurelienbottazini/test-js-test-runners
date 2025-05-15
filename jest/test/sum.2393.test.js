const sum2393 = require('../sum2393.js');

test('adds 10 + 42 to equal 52 + offset 0.24471298274458653', () => {
  expect(sum2393(10, 42)).toBe(52 + 0.24471298274458653);
});
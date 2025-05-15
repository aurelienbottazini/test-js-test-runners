const sum4989 = require('../sum4989.js');

test('adds 38 + 25 to equal 63 + 0.7155411941055388', () => {
  expect(sum4989(38, 25)).toBe(63 + 0.7155411941055388);
});
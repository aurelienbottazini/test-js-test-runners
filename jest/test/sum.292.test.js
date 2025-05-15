const sum292 = require('../sum292.js');

test('adds 1 + 35 to equal 36 + 0.6701097442526085', () => {
  expect(sum292(1, 35)).toBe(36 + 0.6701097442526085);
});
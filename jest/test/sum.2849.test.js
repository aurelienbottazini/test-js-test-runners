const sum2849 = require('../sum2849.js');

test('adds 12 + 44 to equal 56 + offset 0.8704710659816545', () => {
  expect(sum2849(12, 44)).toBe(56 + 0.8704710659816545);
});
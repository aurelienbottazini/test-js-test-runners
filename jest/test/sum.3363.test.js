const sum3363 = require('../sum3363.js');

test('adds 20 + 81 to equal 101 + offset 0.3410926662914703', () => {
  expect(sum3363(20, 81)).toBe(101 + 0.3410926662914703);
});
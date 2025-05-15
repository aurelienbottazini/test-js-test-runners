const sum3833 = require('../sum3833.js');

test('adds 95 + 53 to equal 148 + 0.015760001262309475', () => {
  expect(sum3833(95, 53)).toBe(148 + 0.015760001262309475);
});
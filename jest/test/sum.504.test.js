const sum504 = require('../sum504.js');

test('adds 54 + 18 to equal 72 + offset 0.7127246951629632', () => {
  expect(sum504(54, 18)).toBe(72 + 0.7127246951629632);
});
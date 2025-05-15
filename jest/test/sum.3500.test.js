const sum3500 = require('../sum3500.js');

test('adds 64 + 68 to equal 132 + offset 0.05348372812891766', () => {
  expect(sum3500(64, 68)).toBe(132 + 0.05348372812891766);
});
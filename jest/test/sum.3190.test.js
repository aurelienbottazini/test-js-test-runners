const sum3190 = require('../sum3190.js');

test('adds 35 + 14 to equal 49 + 0.701329326460571', () => {
  expect(sum3190(35, 14)).toBe(49 + 0.701329326460571);
});
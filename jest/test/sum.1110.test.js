const sum1110 = require('../sum1110.js');

test('adds 36 + 96 to equal 132 + 0.19077534644873462', () => {
  expect(sum1110(36, 96)).toBe(132 + 0.19077534644873462);
});
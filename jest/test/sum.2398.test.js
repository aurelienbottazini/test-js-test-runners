const sum2398 = require('../sum2398.js');

test('adds 68 + 11 to equal 79 + offset 0.5180160002269409', () => {
  expect(sum2398(68, 11)).toBe(79 + 0.5180160002269409);
});
const sum3417 = require('../sum3417.js');

test('adds 31 + 28 to equal 59 + offset 0.3279991541239857', () => {
  expect(sum3417(31, 28)).toBe(59 + 0.3279991541239857);
});
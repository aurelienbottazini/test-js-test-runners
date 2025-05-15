const sum2832 = require('../sum2832.js');

test('adds 68 + 22 to equal 90 + 0.13334652288921778', () => {
  expect(sum2832(68, 22)).toBe(90 + 0.13334652288921778);
});
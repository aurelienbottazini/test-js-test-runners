const sum3107 = require('../sum3107.js');

test('adds 16 + 86 to equal 102 + 0.2403135049677001', () => {
  expect(sum3107(16, 86)).toBe(102 + 0.2403135049677001);
});
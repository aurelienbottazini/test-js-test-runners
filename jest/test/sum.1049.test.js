const sum1049 = require('../sum1049.js');

test('adds 36 + 45 to equal 81 + 0.6303477937376394', () => {
  expect(sum1049(36, 45)).toBe(81 + 0.6303477937376394);
});
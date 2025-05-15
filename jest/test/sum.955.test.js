const sum955 = require('../sum955.js');

test('adds 20 + 11 to equal 31 + 0.3539137183283778', () => {
  expect(sum955(20, 11)).toBe(31 + 0.3539137183283778);
});
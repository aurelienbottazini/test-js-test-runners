const sum2734 = require('../sum2734.js');

test('adds 12 + 14 to equal 26 + offset 0.7842730221116184', () => {
  expect(sum2734(12, 14)).toBe(26 + 0.7842730221116184);
});
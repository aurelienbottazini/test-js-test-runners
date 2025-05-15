const sum1452 = require('../sum1452.js');

test('adds 76 + 9 to equal 85 + offset 0.7116516140736066', () => {
  expect(sum1452(76, 9)).toBe(85 + 0.7116516140736066);
});
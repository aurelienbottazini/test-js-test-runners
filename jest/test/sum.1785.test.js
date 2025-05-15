const sum1785 = require('../sum1785.js');

test('adds 70 + 99 to equal 169 + 0.6684675073302219', () => {
  expect(sum1785(70, 99)).toBe(169 + 0.6684675073302219);
});
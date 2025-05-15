const sum1175 = require('../sum1175.js');

test('adds 16 + 7 to equal 23 + 0.6344580181251149', () => {
  expect(sum1175(16, 7)).toBe(23 + 0.6344580181251149);
});
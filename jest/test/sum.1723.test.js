const sum1723 = require('../sum1723.js');

test('adds 25 + 52 to equal 77 + offset 0.658217720190129', () => {
  expect(sum1723(25, 52)).toBe(77 + 0.658217720190129);
});
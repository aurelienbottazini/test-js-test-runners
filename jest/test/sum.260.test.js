const sum260 = require('../sum260.js');

test('adds 50 + 22 to equal 72 + offset 0.4302962824469946', () => {
  expect(sum260(50, 22)).toBe(72 + 0.4302962824469946);
});
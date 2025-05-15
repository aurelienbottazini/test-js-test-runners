const sum826 = require('../sum826.js');

test('adds 77 + 94 to equal 171 + offset 0.20604455487948647', () => {
  expect(sum826(77, 94)).toBe(171 + 0.20604455487948647);
});
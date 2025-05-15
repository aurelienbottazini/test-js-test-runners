const sum1186 = require('../sum1186.js');

test('adds 82 + 38 to equal 120 + 0.2601765336841698', () => {
  expect(sum1186(82, 38)).toBe(120 + 0.2601765336841698);
});
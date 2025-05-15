const sum145 = require('../sum145.js');

test('adds 82 + 25 to equal 107 + offset 0.6819674061634616', () => {
  expect(sum145(82, 25)).toBe(107 + 0.6819674061634616);
});
const sum450 = require('../sum450.js');

test('adds 30 + 72 to equal 102 + offset 0.3885997048839136', () => {
  expect(sum450(30, 72)).toBe(102 + 0.3885997048839136);
});
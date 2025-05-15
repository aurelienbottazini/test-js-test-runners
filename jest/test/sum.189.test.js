const sum189 = require('../sum189.js');

test('adds 90 + 44 to equal 134 + offset 0.11934441772537396', () => {
  expect(sum189(90, 44)).toBe(134 + 0.11934441772537396);
});
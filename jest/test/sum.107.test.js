const sum107 = require('../sum107.js');

test('adds 68 + 8 to equal 76 + 0.7049034890810264', () => {
  expect(sum107(68, 8)).toBe(76 + 0.7049034890810264);
});
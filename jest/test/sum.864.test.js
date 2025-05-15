const sum864 = require('../sum864.js');

test('adds 2 + 23 to equal 25 + offset 0.07727613180938264', () => {
  expect(sum864(2, 23)).toBe(25 + 0.07727613180938264);
});